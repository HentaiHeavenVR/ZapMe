// automatically generated by the FlatBuffers compiler, do not modify

import { GlobalMessage } from '../../../fbs/zapme/realtime/global-message.js';
import { ServerGoodbye } from '../../../fbs/zapme/realtime/server-goodbye.js';
import { ServerHeartbeat } from '../../../fbs/zapme/realtime/server-heartbeat.js';
import { ServerHello } from '../../../fbs/zapme/realtime/server-hello.js';
import { ServerReady } from '../../../fbs/zapme/realtime/server-ready.js';


export enum ServerMessageBody {
  NONE = 0,
  hello = 1,
  goodbye = 2,
  heartbeat = 3,
  ready = 4,
  message_global = 5
}

export function unionToServerMessageBody(
  type: ServerMessageBody,
  accessor: (obj:GlobalMessage|ServerGoodbye|ServerHeartbeat|ServerHello|ServerReady) => GlobalMessage|ServerGoodbye|ServerHeartbeat|ServerHello|ServerReady|null
): GlobalMessage|ServerGoodbye|ServerHeartbeat|ServerHello|ServerReady|null {
  switch(ServerMessageBody[type]) {
    case 'NONE': return null; 
    case 'hello': return accessor(new ServerHello())! as ServerHello;
    case 'goodbye': return accessor(new ServerGoodbye())! as ServerGoodbye;
    case 'heartbeat': return accessor(new ServerHeartbeat())! as ServerHeartbeat;
    case 'ready': return accessor(new ServerReady())! as ServerReady;
    case 'message_global': return accessor(new GlobalMessage())! as GlobalMessage;
    default: return null;
  }
}

export function unionListToServerMessageBody(
  type: ServerMessageBody, 
  accessor: (index: number, obj:GlobalMessage|ServerGoodbye|ServerHeartbeat|ServerHello|ServerReady) => GlobalMessage|ServerGoodbye|ServerHeartbeat|ServerHello|ServerReady|null, 
  index: number
): GlobalMessage|ServerGoodbye|ServerHeartbeat|ServerHello|ServerReady|null {
  switch(ServerMessageBody[type]) {
    case 'NONE': return null; 
    case 'hello': return accessor(index, new ServerHello())! as ServerHello;
    case 'goodbye': return accessor(index, new ServerGoodbye())! as ServerGoodbye;
    case 'heartbeat': return accessor(index, new ServerHeartbeat())! as ServerHeartbeat;
    case 'ready': return accessor(index, new ServerReady())! as ServerReady;
    case 'message_global': return accessor(index, new GlobalMessage())! as GlobalMessage;
    default: return null;
  }
}
