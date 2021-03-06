import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as QueryHeader_pb from './QueryHeader_pb';
import * as ResponseHeader_pb from './ResponseHeader_pb';
import * as CryptoAddClaim_pb from './CryptoAddClaim_pb';

export class CryptoGetClaimQuery extends jspb.Message {
  getHeader(): QueryHeader_pb.QueryHeader | undefined;
  setHeader(value?: QueryHeader_pb.QueryHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetClaimQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetClaimQuery): CryptoGetClaimQuery.AsObject;
  static serializeBinaryToWriter(message: CryptoGetClaimQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetClaimQuery;
  static deserializeBinaryFromReader(message: CryptoGetClaimQuery, reader: jspb.BinaryReader): CryptoGetClaimQuery;
}

export namespace CryptoGetClaimQuery {
  export type AsObject = {
    header?: QueryHeader_pb.QueryHeader.AsObject,
    accountid?: BasicTypes_pb.AccountID.AsObject,
    hash: Uint8Array | string,
  }
}

export class CryptoGetClaimResponse extends jspb.Message {
  getHeader(): ResponseHeader_pb.ResponseHeader | undefined;
  setHeader(value?: ResponseHeader_pb.ResponseHeader): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getClaim(): CryptoAddClaim_pb.Claim | undefined;
  setClaim(value?: CryptoAddClaim_pb.Claim): void;
  hasClaim(): boolean;
  clearClaim(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoGetClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoGetClaimResponse): CryptoGetClaimResponse.AsObject;
  static serializeBinaryToWriter(message: CryptoGetClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoGetClaimResponse;
  static deserializeBinaryFromReader(message: CryptoGetClaimResponse, reader: jspb.BinaryReader): CryptoGetClaimResponse;
}

export namespace CryptoGetClaimResponse {
  export type AsObject = {
    header?: ResponseHeader_pb.ResponseHeader.AsObject,
    claim?: CryptoAddClaim_pb.Claim.AsObject,
  }
}

