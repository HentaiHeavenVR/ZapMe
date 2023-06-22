// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ClientHeartbeat {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): ClientHeartbeat {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  lastRttMs(): number {
    return this.bb!.readUint32(this.bb_pos);
  }

  static sizeOf(): number {
    return 4;
  }

  static createClientHeartbeat(
    builder: flatbuffers.Builder,
    last_rtt_ms: number
  ): flatbuffers.Offset {
    builder.prep(4, 4);
    builder.writeInt32(last_rtt_ms);
    return builder.offset();
  }
}
