import * as jspb from "google-protobuf"

import * as BasicTypes_pb from './BasicTypes_pb';

export class SystemUndeleteTransactionBody extends jspb.Message {
  getFileid(): BasicTypes_pb.FileID | undefined;
  setFileid(value?: BasicTypes_pb.FileID): void;
  hasFileid(): boolean;
  clearFileid(): void;
  hasFileid(): boolean;

  getContractid(): BasicTypes_pb.ContractID | undefined;
  setContractid(value?: BasicTypes_pb.ContractID): void;
  hasContractid(): boolean;
  clearContractid(): void;
  hasContractid(): boolean;

  getIdCase(): SystemUndeleteTransactionBody.IdCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemUndeleteTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: SystemUndeleteTransactionBody): SystemUndeleteTransactionBody.AsObject;
  static serializeBinaryToWriter(message: SystemUndeleteTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemUndeleteTransactionBody;
  static deserializeBinaryFromReader(message: SystemUndeleteTransactionBody, reader: jspb.BinaryReader): SystemUndeleteTransactionBody;
}

export namespace SystemUndeleteTransactionBody {
  export type AsObject = {
    fileid?: BasicTypes_pb.FileID.AsObject,
    contractid?: BasicTypes_pb.ContractID.AsObject,
  }

  export enum IdCase { 
    ID_NOT_SET = 0,
    FILEID = 1,
    CONTRACTID = 2,
  }
}

