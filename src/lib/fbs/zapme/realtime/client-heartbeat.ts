// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ClientHeartbeat {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ClientHeartbeat {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

timestamp():bigint {
  return this.bb!.readInt64(this.bb_pos);
}

static sizeOf():number {
  return 8;
}

static createClientHeartbeat(builder:flatbuffers.Builder, timestamp: bigint):flatbuffers.Offset {
  builder.prep(8, 8);
  builder.writeInt64(BigInt(timestamp ?? 0));
  return builder.offset();
}

}
