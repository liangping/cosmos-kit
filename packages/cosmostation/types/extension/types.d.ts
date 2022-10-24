import { ChainWalletDataBase, MainWalletDataBase } from '@cosmos-kit/core';
import { Key } from '@keplr-wallet/types';
import { AminoSignResponse, StdSignDoc } from '@cosmjs/amino';
import { OfflineDirectSigner, OfflineSigner } from '@cosmjs/proto-signing';
import { DirectSignResponse } from '@cosmjs/proto-signing';

export interface ChainCosmostationExtensionData extends ChainWalletDataBase {
  username?: string;
}
export declare type CosmostationExtensionData = MainWalletDataBase;

export interface CosmostationSignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;
  readonly disableBalanceCheck?: boolean;
}

export interface Cosmostation {
  enable(chainIds: string | string[]): Promise<void>;
  mode: 'extension';
  getKey(chainId: string): Promise<Key>;
  getOfflineSigner(chainId: string): OfflineSigner & OfflineDirectSigner;
  getOfflineSignerOnlyAmino(chainId: string): OfflineSigner;
  getOfflineSignerAuto(
    chainId: string
  ): Promise<OfflineSigner | OfflineDirectSigner>;
  signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: CosmostationSignOptions
  ): Promise<AminoSignResponse>;
  signDirect(
    chainId: string,
    signer: string,
    signDoc: {
      /** SignDoc bodyBytes */
      bodyBytes?: Uint8Array | null;
      /** SignDoc authInfoBytes */
      authInfoBytes?: Uint8Array | null;
      /** SignDoc chainId */
      chainId?: string | null;
      /** SignDoc accountNumber */
      accountNumber?: Long | null;
    },
    signOptions?: CosmostationSignOptions
  ): Promise<DirectSignResponse>;
  getEnigmaPubKey(chainId: string): Promise<Uint8Array>;
  getEnigmaTxEncryptionKey(
    chainId: string,
    nonce: Uint8Array
  ): Promise<Uint8Array>;
  enigmaEncrypt(
    chainId: string,
    contractCodeHash: string,
    msg: object
  ): Promise<Uint8Array>;
  enigmaDecrypt(
    chainId: string,
    ciphertext: Uint8Array,
    nonce: Uint8Array
  ): Promise<Uint8Array>;
}