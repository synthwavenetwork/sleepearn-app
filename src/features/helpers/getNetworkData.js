import {
  avalancheStakePools,
  avalancheZaps,
  bscStakePools,
  bscAddressBook,
  bscZaps,
  fantomStakePools,
  fantomZaps,
  hecoStakePools,
  hecoZaps,
  nativeCoins,
  polygonStakePools,
  polygonZaps,
  kardiaPools,
  kardiaTokens,
  kardiaZaps
} from '../configure';

const networkTxUrls = {
  kai: hash => `https://explorer.kardiachain.io/tx/${hash}`
};

const networkFriendlyName = {
  56: 'BSC',
  128: 'HECO',
  43114: 'AVAX',
  137: 'Polygon',
  250: 'Fantom',
};

const networkBuyLinks = {
  56: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
  128: 'https://ht.mdex.com/#/swap?inputCurrency=0xa71edc38d189767582c38a3145b5873052c3e47a&outputCurrency=0x765277eebeca2e31912c9946eae1021199b39c61',
  137: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
  250: 'https://spookyswap.finance/swap?inputCurrency=0x04068da6c83afcfa0e13ba15a6696662335d5b75&outputCurrency=0xd6070ae98b8069de6B494332d1A1a81B6179D960',
  43114: 'https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B',
};

export const getNetworkCoin = () => {
  return nativeCoins[0];
};

export const getNetworkPools = () => {
  return kardiaPools
};

export const getNetworkTokens = () => {
  return kardiaTokens;
};

export const getNetworkBurnTokens = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '0':
      return {};
    case '56':
      return {
        [bscAddressBook.tokens.GARUDA.symbol]: bscAddressBook.tokens.GARUDA,
        [bscAddressBook.tokens.SDUMP.symbol]: bscAddressBook.tokens.SDUMP,
      };
    case '128':
      return {};
    case '43114':
      return {};
    case '137':
      return {};
    case '250':
      return {};
    default:
      throw new Error(
        `Create address book for this chainId first. Check out https://github.com/beefyfinance/address-book`
      );
  }
};

export const getNetworkZaps = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '0':
      return kardiaZaps;
    case '56':
      return bscZaps;
    case '128':
      return hecoZaps;
    case '43114':
      return avalancheZaps;
    case '137':
      return polygonZaps;
    case '250':
      return fantomZaps;
    default:
      return [];
  }
};

export const getNetworkStakePools = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return bscStakePools;
    case '128':
      return hecoStakePools;
    case '43114':
      return avalancheStakePools;
    case '137':
      return polygonStakePools;
    case '250':
      return fantomStakePools;
    default:
      return [];
  }
};

export const getNetworkStables = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return [
        'BUSD',
        'USDT',
        'USDC',
        'DAI',
        'VAI',
        'QUSD',
        'UST',
        'VENUS BLP',
        '3EPS',
        'fUSDT',
        '4BELT',
        'IRON',
        'DOLLY',
        'TUSD',
      ];
    case '128':
      return ['USDT', 'HUSD'];
    case '43114':
      return ['USDT', 'DAI', 'BUSD', 'zDAI', 'zUSDT'];
    case '137':
      return ['USDC', 'USDT', 'maUSDC', 'DAI', 'IRON', 'miMATIC', 'FRAX', 'rUSD'];
    case '250':
      return ['USDC', 'USDT', 'DAI', 'fUSDT'];
    default:
      return [];
  }
};

export const getNetworkMulticall = () => {
  return '0x58047e297BEf0934c8347405e8cD33778aF9f1E3'
};

export const getNetworkConnectors = t => {
      return {
        network: 'KardiaChain',
        cacheProvider: true,
        disableInjectedProvider: true,
        providerOptions: {
          // injected: {
          //   display: {
          //     name: 'Injected',
          //     description: t('Home-BrowserWallet'),
          //   }
          // },
          'custom-kai': {
            display: {
              name: 'KardiaChain',
              description: t('Kardia Extension Wallet'),
              logo: "https://assets.coingecko.com/coins/images/7942/small/KardiaChain.png?1591631223",
            },
            package: 'kai',
            connector: async () => {
              const provider = window.kardiachain;
              await provider.enable();
              return provider;
            },
          }
        },
      };
};

export const getNetworkTxUrl = networkTxUrls['kai'];
export const getNetworkFriendlyName = () => networkFriendlyName[process.env.REACT_APP_NETWORK_ID];
export const getNetworkBuyLink = () => networkBuyLinks[process.env.REACT_APP_NETWORK_ID];
