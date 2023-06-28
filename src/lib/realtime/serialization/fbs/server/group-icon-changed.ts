// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class GroupIconChanged {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): GroupIconChanged {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsGroupIconChanged(
    bb: flatbuffers.ByteBuffer,
    obj?: GroupIconChanged
  ): GroupIconChanged {
    return (obj || new GroupIconChanged()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsGroupIconChanged(
    bb: flatbuffers.ByteBuffer,
    obj?: GroupIconChanged
  ): GroupIconChanged {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new GroupIconChanged()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  groupId(): string | null;
  groupId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  groupId(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  iconUrl(): string | null;
  iconUrl(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  iconUrl(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  static startGroupIconChanged(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addGroupId(builder: flatbuffers.Builder, groupIdOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, groupIdOffset, 0);
  }

  static addIconUrl(builder: flatbuffers.Builder, iconUrlOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, iconUrlOffset, 0);
  }

  static endGroupIconChanged(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createGroupIconChanged(
    builder: flatbuffers.Builder,
    groupIdOffset: flatbuffers.Offset,
    iconUrlOffset: flatbuffers.Offset
  ): flatbuffers.Offset {
    GroupIconChanged.startGroupIconChanged(builder);
    GroupIconChanged.addGroupId(builder, groupIdOffset);
    GroupIconChanged.addIconUrl(builder, iconUrlOffset);
    return GroupIconChanged.endGroupIconChanged(builder);
  }
}