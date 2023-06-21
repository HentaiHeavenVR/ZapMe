// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class RealtimeEventSessionUserIceCandidateDiscovered {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(
    i: number,
    bb: flatbuffers.ByteBuffer
  ): RealtimeEventSessionUserIceCandidateDiscovered {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsRealtimeEventSessionUserIceCandidateDiscovered(
    bb: flatbuffers.ByteBuffer,
    obj?: RealtimeEventSessionUserIceCandidateDiscovered
  ): RealtimeEventSessionUserIceCandidateDiscovered {
    return (obj || new RealtimeEventSessionUserIceCandidateDiscovered()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }

  static getSizePrefixedRootAsRealtimeEventSessionUserIceCandidateDiscovered(
    bb: flatbuffers.ByteBuffer,
    obj?: RealtimeEventSessionUserIceCandidateDiscovered
  ): RealtimeEventSessionUserIceCandidateDiscovered {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RealtimeEventSessionUserIceCandidateDiscovered()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb
    );
  }

  userId(): string | null;
  userId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  userId(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset
      ? this.bb!.__string(this.bb_pos + offset, optionalEncoding)
      : null;
  }

  candidate(): string | null;
  candidate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  candidate(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset
      ? this.bb!.__string(this.bb_pos + offset, optionalEncoding)
      : null;
  }

  static startRealtimeEventSessionUserIceCandidateDiscovered(
    builder: flatbuffers.Builder
  ) {
    builder.startObject(2);
  }

  static addUserId(
    builder: flatbuffers.Builder,
    userIdOffset: flatbuffers.Offset
  ) {
    builder.addFieldOffset(0, userIdOffset, 0);
  }

  static addCandidate(
    builder: flatbuffers.Builder,
    candidateOffset: flatbuffers.Offset
  ) {
    builder.addFieldOffset(1, candidateOffset, 0);
  }

  static endRealtimeEventSessionUserIceCandidateDiscovered(
    builder: flatbuffers.Builder
  ): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createRealtimeEventSessionUserIceCandidateDiscovered(
    builder: flatbuffers.Builder,
    userIdOffset: flatbuffers.Offset,
    candidateOffset: flatbuffers.Offset
  ): flatbuffers.Offset {
    RealtimeEventSessionUserIceCandidateDiscovered.startRealtimeEventSessionUserIceCandidateDiscovered(
      builder
    );
    RealtimeEventSessionUserIceCandidateDiscovered.addUserId(
      builder,
      userIdOffset
    );
    RealtimeEventSessionUserIceCandidateDiscovered.addCandidate(
      builder,
      candidateOffset
    );
    return RealtimeEventSessionUserIceCandidateDiscovered.endRealtimeEventSessionUserIceCandidateDiscovered(
      builder
    );
  }
}
