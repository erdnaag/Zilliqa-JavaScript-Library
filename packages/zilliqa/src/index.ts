import { HTTPProvider, Provider } from '@zilliqa-js/core';
import { Wallet } from '@zilliqa-js/account';
import { Contracts } from '@zilliqa-js/contract';
import { Blockchain, Network } from '@zilliqa-js/blockchain';

export class Zilliqa {
  provider: Provider;

  blockchain: Blockchain;
  contracts: Contracts;
  network: Network;
  wallet: Wallet;

  constructor(node: string, provider?: Provider) {
    this.provider = provider || new HTTPProvider(node);
    this.wallet = new Wallet(this.provider);
    this.blockchain = new Blockchain(this.provider, this.wallet);
    this.network = new Network(this.provider, this.wallet);
    this.contracts = new Contracts(this.provider, this.wallet);
  }
}