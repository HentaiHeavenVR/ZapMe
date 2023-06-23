// automatically generated by the FlatBuffers compiler, do not modify

import {
  RealtimeSessionBody,
  unionListToRealtimeSessionBody,
  unionToRealtimeSessionBody,
} from '../../fbs/realtime/realtime-session-body.js';
import * as flatbuffers from 'flatbuffers';

export class RealtimeSession {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): RealtimeSession {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsRealtimeSession(
    bb: flatbuffers.ByteBuffer,
    obj?: RealtimeSession
  ): RealtimeSession {
    return (obj || new RealtimeSession()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsRealtimeSession(
    bb: flatbuffers.ByteBuffer,
    obj?: RealtimeSession
  ): RealtimeSession {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RealtimeSession()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  bodyType(): RealtimeSessionBody {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readUint8(this.bb_pos + offset) : RealtimeSessionBody.NONE;
  }

  body<T extends flatbuffers.Table>(obj: any): any | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
  }

  static startRealtimeSession(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addBodyType(builder: flatbuffers.Builder, bodyType: RealtimeSessionBody) {
    builder.addFieldInt8(0, bodyType, RealtimeSessionBody.NONE);
  }

  static addBody(builder: flatbuffers.Builder, bodyOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, bodyOffset, 0);
  }

  static endRealtimeSession(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createRealtimeSession(
    builder: flatbuffers.Builder,
    bodyType: RealtimeSessionBody,
    bodyOffset: flatbuffers.Offset
  ): flatbuffers.Offset {
    RealtimeSession.startRealtimeSession(builder);
    RealtimeSession.addBodyType(builder, bodyType);
    RealtimeSession.addBody(builder, bodyOffset);
    return RealtimeSession.endRealtimeSession(builder);
  }
}
