// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class ServerHello {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ServerHello {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsServerHello(bb:flatbuffers.ByteBuffer, obj?:ServerHello):ServerHello {
  return (obj || new ServerHello()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsServerHello(bb:flatbuffers.ByteBuffer, obj?:ServerHello):ServerHello {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ServerHello()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

heartbeatIntervalMs():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

ratelimitMessagesPerSec():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

ratelimitMessagesPerMin():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

ratelimitBytesPerSec():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

ratelimitBytesPerMin():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

static startServerHello(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addHeartbeatIntervalMs(builder:flatbuffers.Builder, heartbeatIntervalMs:bigint) {
  builder.addFieldInt64(0, heartbeatIntervalMs, BigInt('0'));
}

static addRatelimitMessagesPerSec(builder:flatbuffers.Builder, ratelimitMessagesPerSec:bigint) {
  builder.addFieldInt64(1, ratelimitMessagesPerSec, BigInt('0'));
}

static addRatelimitMessagesPerMin(builder:flatbuffers.Builder, ratelimitMessagesPerMin:bigint) {
  builder.addFieldInt64(2, ratelimitMessagesPerMin, BigInt('0'));
}

static addRatelimitBytesPerSec(builder:flatbuffers.Builder, ratelimitBytesPerSec:bigint) {
  builder.addFieldInt64(3, ratelimitBytesPerSec, BigInt('0'));
}

static addRatelimitBytesPerMin(builder:flatbuffers.Builder, ratelimitBytesPerMin:bigint) {
  builder.addFieldInt64(4, ratelimitBytesPerMin, BigInt('0'));
}

static endServerHello(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createServerHello(builder:flatbuffers.Builder, heartbeatIntervalMs:bigint, ratelimitMessagesPerSec:bigint, ratelimitMessagesPerMin:bigint, ratelimitBytesPerSec:bigint, ratelimitBytesPerMin:bigint):flatbuffers.Offset {
  ServerHello.startServerHello(builder);
  ServerHello.addHeartbeatIntervalMs(builder, heartbeatIntervalMs);
  ServerHello.addRatelimitMessagesPerSec(builder, ratelimitMessagesPerSec);
  ServerHello.addRatelimitMessagesPerMin(builder, ratelimitMessagesPerMin);
  ServerHello.addRatelimitBytesPerSec(builder, ratelimitBytesPerSec);
  ServerHello.addRatelimitBytesPerMin(builder, ratelimitBytesPerMin);
  return ServerHello.endServerHello(builder);
}
}