// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class RealtimeSessionRejoin {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): RealtimeSessionRejoin {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsRealtimeSessionRejoin(
    bb: flatbuffers.ByteBuffer,
    obj?: RealtimeSessionRejoin
  ): RealtimeSessionRejoin {
    return (obj || new RealtimeSessionRejoin()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }

  static getSizePrefixedRootAsRealtimeSessionRejoin(
    bb: flatbuffers.ByteBuffer,
    obj?: RealtimeSessionRejoin
  ): RealtimeSessionRejoin {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RealtimeSessionRejoin()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }

  sessionId(): string | null;
  sessionId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  sessionId(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  webrtcOffer(): string | null;
  webrtcOffer(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  webrtcOffer(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  static startRealtimeSessionRejoin(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addSessionId(builder: flatbuffers.Builder, sessionIdOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, sessionIdOffset, 0);
  }

  static addWebrtcOffer(builder: flatbuffers.Builder, webrtcOfferOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, webrtcOfferOffset, 0);
  }

  static endRealtimeSessionRejoin(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createRealtimeSessionRejoin(
    builder: flatbuffers.Builder,
    sessionIdOffset: flatbuffers.Offset,
    webrtcOfferOffset: flatbuffers.Offset
  ): flatbuffers.Offset {
    RealtimeSessionRejoin.startRealtimeSessionRejoin(builder);
    RealtimeSessionRejoin.addSessionId(builder, sessionIdOffset);
    RealtimeSessionRejoin.addWebrtcOffer(builder, webrtcOfferOffset);
    return RealtimeSessionRejoin.endRealtimeSessionRejoin(builder);
  }
}
