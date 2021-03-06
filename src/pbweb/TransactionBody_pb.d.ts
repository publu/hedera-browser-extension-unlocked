import * as jspb from "google-protobuf"

import * as SystemDelete_pb from './SystemDelete_pb';
import * as SystemUndelete_pb from './SystemUndelete_pb';
import * as ContractCall_pb from './ContractCall_pb';
import * as ContractCreate_pb from './ContractCreate_pb';
import * as ContractUpdate_pb from './ContractUpdate_pb';
import * as CryptoAddClaim_pb from './CryptoAddClaim_pb';
import * as CryptoCreate_pb from './CryptoCreate_pb';
import * as CryptoDelete_pb from './CryptoDelete_pb';
import * as CryptoDeleteClaim_pb from './CryptoDeleteClaim_pb';
import * as CryptoTransfer_pb from './CryptoTransfer_pb';
import * as CryptoUpdate_pb from './CryptoUpdate_pb';
import * as FileAppend_pb from './FileAppend_pb';
import * as FileCreate_pb from './FileCreate_pb';
import * as FileDelete_pb from './FileDelete_pb';
import * as FileUpdate_pb from './FileUpdate_pb';
import * as Duration_pb from './Duration_pb';
import * as BasicTypes_pb from './BasicTypes_pb';
import * as ContractDelete_pb from './ContractDelete_pb';

export class TransactionBody extends jspb.Message {
  getTransactionid(): BasicTypes_pb.TransactionID | undefined;
  setTransactionid(value?: BasicTypes_pb.TransactionID): void;
  hasTransactionid(): boolean;
  clearTransactionid(): void;

  getNodeaccountid(): BasicTypes_pb.AccountID | undefined;
  setNodeaccountid(value?: BasicTypes_pb.AccountID): void;
  hasNodeaccountid(): boolean;
  clearNodeaccountid(): void;

  getTransactionfee(): number;
  setTransactionfee(value: number): void;

  getTransactionvalidduration(): Duration_pb.Duration | undefined;
  setTransactionvalidduration(value?: Duration_pb.Duration): void;
  hasTransactionvalidduration(): boolean;
  clearTransactionvalidduration(): void;

  getGeneraterecord(): boolean;
  setGeneraterecord(value: boolean): void;

  getMemo(): string;
  setMemo(value: string): void;

  getContractcall(): ContractCall_pb.ContractCallTransactionBody | undefined;
  setContractcall(value?: ContractCall_pb.ContractCallTransactionBody): void;
  hasContractcall(): boolean;
  clearContractcall(): void;
  hasContractcall(): boolean;

  getContractcreateinstance(): ContractCreate_pb.ContractCreateTransactionBody | undefined;
  setContractcreateinstance(value?: ContractCreate_pb.ContractCreateTransactionBody): void;
  hasContractcreateinstance(): boolean;
  clearContractcreateinstance(): void;
  hasContractcreateinstance(): boolean;

  getContractupdateinstance(): ContractUpdate_pb.ContractUpdateTransactionBody | undefined;
  setContractupdateinstance(value?: ContractUpdate_pb.ContractUpdateTransactionBody): void;
  hasContractupdateinstance(): boolean;
  clearContractupdateinstance(): void;
  hasContractupdateinstance(): boolean;

  getContractdeleteinstance(): ContractDelete_pb.ContractDeleteTransactionBody | undefined;
  setContractdeleteinstance(value?: ContractDelete_pb.ContractDeleteTransactionBody): void;
  hasContractdeleteinstance(): boolean;
  clearContractdeleteinstance(): void;
  hasContractdeleteinstance(): boolean;

  getCryptoaddclaim(): CryptoAddClaim_pb.CryptoAddClaimTransactionBody | undefined;
  setCryptoaddclaim(value?: CryptoAddClaim_pb.CryptoAddClaimTransactionBody): void;
  hasCryptoaddclaim(): boolean;
  clearCryptoaddclaim(): void;
  hasCryptoaddclaim(): boolean;

  getCryptocreateaccount(): CryptoCreate_pb.CryptoCreateTransactionBody | undefined;
  setCryptocreateaccount(value?: CryptoCreate_pb.CryptoCreateTransactionBody): void;
  hasCryptocreateaccount(): boolean;
  clearCryptocreateaccount(): void;
  hasCryptocreateaccount(): boolean;

  getCryptodelete(): CryptoDelete_pb.CryptoDeleteTransactionBody | undefined;
  setCryptodelete(value?: CryptoDelete_pb.CryptoDeleteTransactionBody): void;
  hasCryptodelete(): boolean;
  clearCryptodelete(): void;
  hasCryptodelete(): boolean;

  getCryptodeleteclaim(): CryptoDeleteClaim_pb.CryptoDeleteClaimTransactionBody | undefined;
  setCryptodeleteclaim(value?: CryptoDeleteClaim_pb.CryptoDeleteClaimTransactionBody): void;
  hasCryptodeleteclaim(): boolean;
  clearCryptodeleteclaim(): void;
  hasCryptodeleteclaim(): boolean;

  getCryptotransfer(): CryptoTransfer_pb.CryptoTransferTransactionBody | undefined;
  setCryptotransfer(value?: CryptoTransfer_pb.CryptoTransferTransactionBody): void;
  hasCryptotransfer(): boolean;
  clearCryptotransfer(): void;
  hasCryptotransfer(): boolean;

  getCryptoupdateaccount(): CryptoUpdate_pb.CryptoUpdateTransactionBody | undefined;
  setCryptoupdateaccount(value?: CryptoUpdate_pb.CryptoUpdateTransactionBody): void;
  hasCryptoupdateaccount(): boolean;
  clearCryptoupdateaccount(): void;
  hasCryptoupdateaccount(): boolean;

  getFileappend(): FileAppend_pb.FileAppendTransactionBody | undefined;
  setFileappend(value?: FileAppend_pb.FileAppendTransactionBody): void;
  hasFileappend(): boolean;
  clearFileappend(): void;
  hasFileappend(): boolean;

  getFilecreate(): FileCreate_pb.FileCreateTransactionBody | undefined;
  setFilecreate(value?: FileCreate_pb.FileCreateTransactionBody): void;
  hasFilecreate(): boolean;
  clearFilecreate(): void;
  hasFilecreate(): boolean;

  getFiledelete(): FileDelete_pb.FileDeleteTransactionBody | undefined;
  setFiledelete(value?: FileDelete_pb.FileDeleteTransactionBody): void;
  hasFiledelete(): boolean;
  clearFiledelete(): void;
  hasFiledelete(): boolean;

  getFileupdate(): FileUpdate_pb.FileUpdateTransactionBody | undefined;
  setFileupdate(value?: FileUpdate_pb.FileUpdateTransactionBody): void;
  hasFileupdate(): boolean;
  clearFileupdate(): void;
  hasFileupdate(): boolean;

  getSystemdelete(): SystemDelete_pb.SystemDeleteTransactionBody | undefined;
  setSystemdelete(value?: SystemDelete_pb.SystemDeleteTransactionBody): void;
  hasSystemdelete(): boolean;
  clearSystemdelete(): void;
  hasSystemdelete(): boolean;

  getSystemundelete(): SystemUndelete_pb.SystemUndeleteTransactionBody | undefined;
  setSystemundelete(value?: SystemUndelete_pb.SystemUndeleteTransactionBody): void;
  hasSystemundelete(): boolean;
  clearSystemundelete(): void;
  hasSystemundelete(): boolean;

  getDataCase(): TransactionBody.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBody): TransactionBody.AsObject;
  static serializeBinaryToWriter(message: TransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBody;
  static deserializeBinaryFromReader(message: TransactionBody, reader: jspb.BinaryReader): TransactionBody;
}

export namespace TransactionBody {
  export type AsObject = {
    transactionid?: BasicTypes_pb.TransactionID.AsObject,
    nodeaccountid?: BasicTypes_pb.AccountID.AsObject,
    transactionfee: number,
    transactionvalidduration?: Duration_pb.Duration.AsObject,
    generaterecord: boolean,
    memo: string,
    contractcall?: ContractCall_pb.ContractCallTransactionBody.AsObject,
    contractcreateinstance?: ContractCreate_pb.ContractCreateTransactionBody.AsObject,
    contractupdateinstance?: ContractUpdate_pb.ContractUpdateTransactionBody.AsObject,
    contractdeleteinstance?: ContractDelete_pb.ContractDeleteTransactionBody.AsObject,
    cryptoaddclaim?: CryptoAddClaim_pb.CryptoAddClaimTransactionBody.AsObject,
    cryptocreateaccount?: CryptoCreate_pb.CryptoCreateTransactionBody.AsObject,
    cryptodelete?: CryptoDelete_pb.CryptoDeleteTransactionBody.AsObject,
    cryptodeleteclaim?: CryptoDeleteClaim_pb.CryptoDeleteClaimTransactionBody.AsObject,
    cryptotransfer?: CryptoTransfer_pb.CryptoTransferTransactionBody.AsObject,
    cryptoupdateaccount?: CryptoUpdate_pb.CryptoUpdateTransactionBody.AsObject,
    fileappend?: FileAppend_pb.FileAppendTransactionBody.AsObject,
    filecreate?: FileCreate_pb.FileCreateTransactionBody.AsObject,
    filedelete?: FileDelete_pb.FileDeleteTransactionBody.AsObject,
    fileupdate?: FileUpdate_pb.FileUpdateTransactionBody.AsObject,
    systemdelete?: SystemDelete_pb.SystemDeleteTransactionBody.AsObject,
    systemundelete?: SystemUndelete_pb.SystemUndeleteTransactionBody.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    CONTRACTCALL = 7,
    CONTRACTCREATEINSTANCE = 8,
    CONTRACTUPDATEINSTANCE = 9,
    CONTRACTDELETEINSTANCE = 22,
    CRYPTOADDCLAIM = 10,
    CRYPTOCREATEACCOUNT = 11,
    CRYPTODELETE = 12,
    CRYPTODELETECLAIM = 13,
    CRYPTOTRANSFER = 14,
    CRYPTOUPDATEACCOUNT = 15,
    FILEAPPEND = 16,
    FILECREATE = 17,
    FILEDELETE = 18,
    FILEUPDATE = 19,
    SYSTEMDELETE = 20,
    SYSTEMUNDELETE = 21,
  }
}

