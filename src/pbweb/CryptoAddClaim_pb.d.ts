import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';
import * as Duration_pb from './Duration_pb';

export class Claim extends jspb.Message {
  getAccountid(): BasicTypes_pb.AccountID | undefined;
  setAccountid(value?: BasicTypes_pb.AccountID): void;
  hasAccountid(): boolean;
  clearAccountid(): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getKeys(): BasicTypes_pb.KeyList | undefined;
  setKeys(value?: BasicTypes_pb.KeyList): void;
  hasKeys(): boolean;
  clearKeys(): void;

  getClaimduration(): Duration_pb.Duration | undefined;
  setClaimduration(value?: Duration_pb.Duration): void;
  hasClaimduration(): boolean;
  clearClaimduration(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Claim.AsObject;
  static toObject(includeInstance: boolean, msg: Claim): Claim.AsObject;
  static serializeBinaryToWriter(message: Claim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Claim;
  static deserializeBinaryFromReader(message: Claim, reader: jspb.BinaryReader): Claim;
}

export namespace Claim {
  export type AsObject = {
    accountid?: BasicTypes_pb.AccountID.AsObject,
    hash: Uint8Array | string,
    keys?: BasicTypes_pb.KeyList.AsObject,
    claimduration?: Duration_pb.Duration.AsObject,
  }
}

export class CryptoAddClaimTransactionBody extends jspb.Message {
  getClaim(): Claim | undefined;
  setClaim(value?: Claim): void;
  hasClaim(): boolean;
  clearClaim(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CryptoAddClaimTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: CryptoAddClaimTransactionBody): CryptoAddClaimTransactionBody.AsObject;
  static serializeBinaryToWriter(message: CryptoAddClaimTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CryptoAddClaimTransactionBody;
  static deserializeBinaryFromReader(message: CryptoAddClaimTransactionBody, reader: jspb.BinaryReader): CryptoAddClaimTransactionBody;
}

export namespace CryptoAddClaimTransactionBody {
  export type AsObject = {
    claim?: Claim.AsObject,
  }
}

