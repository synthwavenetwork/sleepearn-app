import { addressBook } from 'blockchain-addressbook';

const {
  polygon: polygonAddressBook,
  heco: hecoAddressBook,
  avax: avaxAddressBook,
  bsc: bscAddressBook,
  fantom: fantomAddressBook,
} = addressBook;
export { bscAddressBook, hecoAddressBook, avaxAddressBook, polygonAddressBook, fantomAddressBook };

export {
  vaultABI,
  bnbVaultABI,
  erc20ABI,
  strategyABI,
  multicallABI,
  govPoolABI,
  uniswapV2PairABI,
  kaidexRouterABI,
  sleepearnKaiDexZapABI
} from './abi';
export { bscStakePools } from './stake/bsc_stake';
export { hecoStakePools } from './stake/heco_stake';
export { avalancheStakePools } from './stake/avalanche_stake';
export { polygonStakePools } from './stake/polygon_stake';
export { fantomStakePools } from './stake/fantom_stake';
export { kardiaStakePools } from './stake/kardia_stake'
export { bscPools } from './vault/bsc_pools';
export { bscZaps } from './zap/bsc_zaps';
export { kardiaZaps } from './zap/kardia_zaps';
export { hecoZaps } from './zap/heco_zaps';
export { avalancheZaps } from './zap/avalanche_zaps';
export { polygonZaps } from './zap/polygon_zaps';
export { fantomZaps } from './zap/fantom_zaps';
export { nativeCoins } from './native_coins';
export { kardiaPools } from './vault/kardia_pools';
export { kardiaTokens } from './vault/kardia_token';