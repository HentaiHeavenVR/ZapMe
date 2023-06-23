import { RealtimeSession } from './serialization/fbs/realtime';
import {
  GlobalMessage,
  ServerHeartbeat,
  ServerHello,
  ServerMessage,
  ServerMessageBody,
} from './serialization/fbs/server';
import { createClientHeartbeatMessage } from './serialization/heartbeat';
import { PUBLIC_BACKEND_WEBSOCKET_URL } from '$env/static/public';
import { SessionTokenStore } from '$lib/stores';
import { isArrayBuffer } from '$lib/typeGuards';
import { ByteBuffer } from 'flatbuffers';

export enum ConnectionState {
  DISCONNECTED = 0,
  DISCONNECTING,
  CONNECTING,
  CONNECTED,
}

export enum AuthenticationState {
  NONE = 0,
  AUTHENTICATING,
  AUTHENTICATED,
}

export type ConnectionRTTChangeHandler = (rtt: number) => void;
export type ConnectionStateChangeHandler = (state: ConnectionState) => void;
export type AuthenticationStateChangeHandler = (state: AuthenticationState) => void;

export class WebSocketClient {
  public static readonly Instance = new WebSocketClient();

  private _socket: WebSocket | null = null;
  private _hearbeatSendTime = 0;

  private _connectionState = ConnectionState.DISCONNECTED;
  private _connectionStateChangeHandlers: ConnectionStateChangeHandler[] = [];
  public get ConnectionState(): ConnectionState {
    return this._connectionState;
  }
  private set ConnectionState(v: ConnectionState) {
    if (this._connectionState !== v) {
      this._connectionState = v;
      if (v !== ConnectionState.CONNECTED) {
        this.AuthenticationState = AuthenticationState.UNAUTHENTICATED;
      }
      this._connectionStateChangeHandlers.forEach((cb) => cb(v));
    }
  }
  public addConnectionStateChangeHandler(cb: ConnectionStateChangeHandler) {
    this._connectionStateChangeHandlers.push(cb);
  }
  public removeConnectionStateChangeHandler(cb: ConnectionStateChangeHandler) {
    const idx = this._connectionStateChangeHandlers.indexOf(cb);
    if (idx !== -1) {
      this._connectionStateChangeHandlers.splice(idx, 1);
    }
  }

  private _authenticationState = AuthenticationState.UNAUTHENTICATED;
  private _authenticationStateChangeHandlers: AuthenticationStateChangeHandler[] = [];
  public get AuthenticationState(): AuthenticationState {
    return this._authenticationState;
  }
  private set AuthenticationState(v: AuthenticationState) {
    if (this._authenticationState !== v) {
      this._authenticationState = v;
      this._authenticationStateChangeHandlers.forEach((cb) => cb(v));
    }
  }
  public addAuthenticationStateChangeHandler(cb: AuthenticationStateChangeHandler) {
    this._authenticationStateChangeHandlers.push(cb);
  }
  public removeAuthenticationStateChangeHandler(cb: AuthenticationStateChangeHandler) {
    const idx = this._authenticationStateChangeHandlers.indexOf(cb);
    if (idx !== -1) {
      this._authenticationStateChangeHandlers.splice(idx, 1);
    }
  }

  private _heartbeatInterval: ReturnType<typeof setInterval> | null = null;
  private _heartbeatIntervalMs = 1000;
  public get HeartbeatIntervalMS(): number {
    return this._heartbeatIntervalMs;
  }
  private set HeartbeatIntervalMS(v: number) {
    if (this._heartbeatIntervalMs !== v) {
      this._heartbeatIntervalMs = v;
      if (this._heartbeatInterval !== null) {
        clearInterval(this._heartbeatInterval);
      }
      this._heartbeatInterval = setInterval(this.sendHeartbeat.bind(this), v);
    }
  }

  private _connectionRTT = 1000;
  private _connectionRTTChangeHandlers: ConnectionRTTChangeHandler[] = [];
  public get ConnectionRTT(): number {
    return this._connectionRTT;
  }
  private set ConnectionRTT(v: number) {
    if (this._connectionRTT !== v) {
      this._connectionRTT = v;
      console.log(`[WS] RTT: ${v}ms`);
      this._connectionRTTChangeHandlers.forEach((cb) => cb(v));
    }
  }
  public addConnectionRTTChangeHandler(cb: ConnectionRTTChangeHandler) {
    this._connectionRTTChangeHandlers.push(cb);
  }
  public removeConnectionRTTChangeHandler(cb: ConnectionRTTChangeHandler) {
    const idx = this._connectionRTTChangeHandlers.indexOf(cb);
    if (idx !== -1) {
      this._connectionRTTChangeHandlers.splice(idx, 1);
    }
  }

  private _autoReconnect = false;
  public Connect() {
    const connectionState = this.ConnectionState;
    if (
      connectionState === ConnectionState.CONNECTING ||
      connectionState === ConnectionState.CONNECTED
    ) {
      return;
    }

    this.AbortHeartbeat();
    this.AbortWebSocket();

    this._autoReconnect = true;
    this._connectionState = ConnectionState.CONNECTING;

    this._socket = new WebSocket(PUBLIC_BACKEND_WEBSOCKET_URL);
    this._socket.binaryType = 'arraybuffer';
    this._socket.onopen = this.handleOpen.bind(this);
    this._socket.onclose = this.handleClose.bind(this);
    this._socket.onerror = this.handleError.bind(this);
    this._socket.onmessage = this.handleMessage.bind(this);
  }

  private AbortHeartbeat() {
    if (this._heartbeatInterval) {
      clearInterval(this._heartbeatInterval);
    }
    this._heartbeatInterval = null;
  }

  private AbortWebSocket() {
    if (this._socket) {
      try {
        this._socket.close();
        this._socket.onclose = null;
        this._socket.onerror = null;
        this._socket.onmessage = null;
        this._socket.onopen = null;
      } catch (e) {
        console.error(e);
      }
    }
    this._socket = null;
    this.ConnectionState = ConnectionState.DISCONNECTED;
  }

  public Disconnect() {
    this._autoReconnect = false;
    const connectionState = this.ConnectionState;
    if (connectionState !== ConnectionState.DISCONNECTED) {
      this.ConnectionState = ConnectionState.DISCONNECTING;
    }

    this.AbortHeartbeat();

    try {
      this._socket.close();
      setTimeout(this.AbortWebSocket.bind(this), 1000);
    } catch {
      this.AbortWebSocket();
    }
  }

  private ReconnectIfWanted() {
    this.AbortHeartbeat();
    this.AbortWebSocket();
    if (this._autoReconnect) {
      setTimeout(this.Connect.bind(this), 2500);
    }
  }

  private handleOpen() {
    if (!this._socket) {
      console.error('[WS] ERROR: Socket not initialized');
      this.ReconnectIfWanted();
      return;
    }

    this.ConnectionState = ConnectionState.CONNECTED;
    console.log('[WS] Connected');

    const sessionToken = SessionTokenStore.get();
    if (!sessionToken) {
      console.error('[WS] ERROR: User not authenticated');
      this.Disconnect(); // Don't reconnect if we're not authenticated
      return;
    }

    this.AuthenticationState = AuthenticationState.AUTHENTICATING;
    this._socket.send(sessionToken.jwtToken);
  }

  private handleClose(ev: CloseEvent) {
    if (!ev.wasClean) {
      console.error('[WS] ERROR: Connection closed unexpectedly');
    } else {
      console.log('[WS] Received disconnect: ', ev.reason);
    }
    this.ReconnectIfWanted();
  }

  private handleError() {
    console.error('[WS] ERROR: Connection error');
    this.ReconnectIfWanted();
  }

  private handleMessage(msg: MessageEvent<string | ArrayBuffer | Blob>) {
    // Only accept binary messages
    if (!isArrayBuffer(msg.data)) {
      console.error('[WS] ERROR: Received non-binary message');
      return;
    }

    const data = msg.data as ArrayBuffer;
    const serverMessage = ServerMessage.getRootAsServerMessage(
      new ByteBuffer(new Uint8Array(data))
    );

    switch (serverMessage.messageType()) {
      case ServerMessageBody.hello: {
        const helloMessage = new ServerHello();
        serverMessage.message(helloMessage);
        this.handleHelloMessage(helloMessage);
        return;
      }
      case ServerMessageBody.heartbeat: {
        const heartbeatMessage = new ServerHeartbeat();
        serverMessage.message(heartbeatMessage);
        this.handleHeartbeatMessage(heartbeatMessage);
        return;
      }
      case ServerMessageBody.realtime_session: {
        const realtimeSessionMessage = new RealtimeSession();
        serverMessage.message(realtimeSessionMessage);
        this.handleRealtimeSessionMessage(realtimeSessionMessage);
        return;
      }
      case ServerMessageBody.message_global: {
        const globalMessage = new GlobalMessage();
        serverMessage.message(globalMessage);
        this.handleGlobalMessage(globalMessage);
        return;
      }
      case ServerMessageBody.NONE:
        return this.handleInvalidMessage();
      default:
        return this.handleInvalidMessage();
    }
  }

  private handleHelloMessage(msg: ServerHello) {
    this.AuthenticationState = AuthenticationState.AUTHENTICATED;
    console.log('[WS] Authenticated');

    this.HeartbeatIntervalMS = msg.heartbeatIntervalMs();
    // this.ratelimitMessagesPerSec = msg.ratelimitMessagesPerSec();
    // this.ratelimitMessagesPerMin = msg.ratelimitMessagesPerMin();
    // this.ratelimitBytesPerSec = msg.ratelimitBytesPerSec();
    // this.ratelimitBytesPerMin = msg.ratelimitBytesPerMin();
  }

  private handleHeartbeatMessage(msg: ServerHeartbeat) {
    this.ConnectionRTT = performance.now() - this._hearbeatSendTime;
    this.HeartbeatIntervalMS = msg.heartbeatIntervalMs();
  }

  private handleRealtimeSessionMessage(msg: RealtimeSession) {
    console.log('[WS] Received realtime session message');
  }

  private handleGlobalMessage(msg: GlobalMessage) {
    console.log('[WS] Received global message', msg.title(), msg.body());
  }

  private handleInvalidMessage() {
    console.error('[WS] Received invalid message');
  }

  private sendHeartbeat() {
    if (!this._socket) {
      this.ReconnectIfWanted();
      return;
    }

    this._hearbeatSendTime = performance.now();
    this._socket.send(createClientHeartbeatMessage(this.HeartbeatIntervalMS));
  }
}
