// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ClientMessageBody, unionToClientMessageBody, unionListToClientMessageBody } from '../../../fbs/zapme/realtime/client-message-body.js';


export class ClientMessage {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ClientMessage {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsClientMessage(bb:flatbuffers.ByteBuffer, obj?:ClientMessage):ClientMessage {
  return (obj || new ClientMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsClientMessage(bb:flatbuffers.ByteBuffer, obj?:ClientMessage):ClientMessage {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ClientMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

timestamp():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

messageType():ClientMessageBody {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : ClientMessageBody.NONE;
}

message<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startClientMessage(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addTimestamp(builder:flatbuffers.Builder, timestamp:bigint) {
  builder.addFieldInt64(0, timestamp, BigInt('0'));
}

static addMessageType(builder:flatbuffers.Builder, messageType:ClientMessageBody) {
  builder.addFieldInt8(1, messageType, ClientMessageBody.NONE);
}

static addMessage(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, messageOffset, 0);
}

static endClientMessage(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createClientMessage(builder:flatbuffers.Builder, timestamp:bigint, messageType:ClientMessageBody, messageOffset:flatbuffers.Offset):flatbuffers.Offset {
  ClientMessage.startClientMessage(builder);
  ClientMessage.addTimestamp(builder, timestamp);
  ClientMessage.addMessageType(builder, messageType);
  ClientMessage.addMessage(builder, messageOffset);
  return ClientMessage.endClientMessage(builder);
}
}