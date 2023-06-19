// automatically generated by the FlatBuffers compiler, do not modify

import { ClientHeartbeat } from '../../../fbs/zapme/realtime/client-heartbeat.js';


export enum ClientMessageBody {
  NONE = 0,
  heartbeat = 1
}

export function unionToClientMessageBody(
  type: ClientMessageBody,
  accessor: (obj:ClientHeartbeat) => ClientHeartbeat|null
): ClientHeartbeat|null {
  switch(ClientMessageBody[type]) {
    case 'NONE': return null; 
    case 'heartbeat': return accessor(new ClientHeartbeat())! as ClientHeartbeat;
    default: return null;
  }
}

export function unionListToClientMessageBody(
  type: ClientMessageBody, 
  accessor: (index: number, obj:ClientHeartbeat) => ClientHeartbeat|null, 
  index: number
): ClientHeartbeat|null {
  switch(ClientMessageBody[type]) {
    case 'NONE': return null; 
    case 'heartbeat': return accessor(index, new ClientHeartbeat())! as ClientHeartbeat;
    default: return null;
  }
}
