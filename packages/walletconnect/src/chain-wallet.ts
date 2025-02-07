import {
  ChainRecord,
  ChainWalletBase,
  Mutable,
  State,
  Wallet,
  WalletConnectOptions,
} from '@cosmos-kit/core';

import { WCClient } from './client';
import { IWCClient } from './types';

export class ChainWC extends ChainWalletBase {
  WCClient: IWCClient;
  clientMutable: Mutable<WCClient> = { state: State.Init };
  options?: WalletConnectOptions;

  constructor(walletInfo: Wallet, chainInfo: ChainRecord, WCClient: IWCClient) {
    super(walletInfo, chainInfo);
    this.WCClient = WCClient;
  }
}
