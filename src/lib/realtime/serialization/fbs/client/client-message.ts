// automatically generated by the FlatBuffers compiler, do not modify

import {
  ClientMessageBody,
  unionListToClientMessageBody,
  unionToClientMessageBody,
} from '../../fbs/client/client-message-body.js';
import * as flatbuffers from 'flatbuffers';

export class ClientMessage {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): ClientMessage {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsClientMessage(bb: flatbuffers.ByteBuffer, obj?: ClientMessage): ClientMessage {
    return (obj || new ClientMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsClientMessage(
    bb: flatbuffers.ByteBuffer,
    obj?: ClientMessage
  ): ClientMessage {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new ClientMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  messageType(): ClientMessageBody {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readUint8(this.bb_pos + offset) : ClientMessageBody.NONE;
  }

  message<T extends flatbuffers.Table>(obj: any): any | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
  }

  static startClientMessage(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addMessageType(builder: flatbuffers.Builder, messageType: ClientMessageBody) {
    builder.addFieldInt8(0, messageType, ClientMessageBody.NONE);
  }

  static addMessage(builder: flatbuffers.Builder, messageOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, messageOffset, 0);
  }

  static endClientMessage(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static finishClientMessageBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
    builder.finish(offset);
  }

  static finishSizePrefixedClientMessageBuffer(
    builder: flatbuffers.Builder,
    offset: flatbuffers.Offset
  ) {
    builder.finish(offset, undefined, true);
  }

  static createClientMessage(
    builder: flatbuffers.Builder,
    messageType: ClientMessageBody,
    messageOffset: flatbuffers.Offset
  ): flatbuffers.Offset {
    ClientMessage.startClientMessage(builder);
    ClientMessage.addMessageType(builder, messageType);
    ClientMessage.addMessage(builder, messageOffset);
    return ClientMessage.endClientMessage(builder);
  }
}
