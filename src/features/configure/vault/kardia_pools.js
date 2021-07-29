export const kardiaPools = [
    {
      id: 'sen-maxi',
      logo: 'single-assets/SEN.png',
      name: 'SEN Maxi',
      token: 'SEN',
      tokenDescription: 'SleepEarn.Finance',
      tokenAddress: '0xb697231730C004110A86f51BfF4B8DD085c0CB28',
      tokenDecimals: 18,
      earnedToken: 'pillowSEN',
      earnedTokenAddress: '0x4EdB55Ab9aF276786468214c401c48751Da91e2a',
      earnContractAddress: '0x4EdB55Ab9aF276786468214c401c48751Da91e2a',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'tokens',
      oracleId: 'SEN',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'SleepEarn.Finance',
      assets: ['SEN'],
      callFee: 0.5,
      withdrawalFee: '0.05%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x43951c209003A70dCA94c2a5b09342C9c84E58Ac',
    },
    {
      id: 'beco-wkai',
      logo: 'single-assets/KAI.png',
      name: 'WKAI',
      token: 'WKAI',
      tokenDescription: 'BecoSwap',
      tokenDescriptionUrl: 'https://becoswap.com/farms',
      tokenAddress: '0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d',
      tokenDecimals: 18,
      earnedToken: 'pillowBecoWKAI',
      earnedTokenAddress: '0xFe431f10e516C7358420F2be62806b4038cC5c41',
      earnContractAddress: '0xFe431f10e516C7358420F2be62806b4038cC5c41',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'tokens',
      oracleId: 'WKAI',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'BecoSwap',
      assets: ['KAI'],
      callFee: 0.5,
      withdrawalFee: '0.05%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
    },
    {
      id: 'dfl-wkai',
      logo: 'single-assets/KAI.png',
      name: 'WKAI',
      token: 'WKAI',
      tokenDescription: 'Defily',
      tokenDescriptionUrl: 'https://defily.io/#/farms',
      tokenAddress: '0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d',
      tokenDecimals: 18,
      earnedToken: 'pillowDflWKAI',
      earnedTokenAddress: '0xEd34794f4109Ab0F6Bc85d62318e221E503B3010',
      earnContractAddress: '0xEd34794f4109Ab0F6Bc85d62318e221E503B3010',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'tokens',
      oracleId: 'WKAI',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Defily',
      assets: ['KAI'],
      callFee: 0.5,
      withdrawalFee: '0.05%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
    },
    {
      id: 'beco-sen-kai',
      name: 'SEN-KAI KLP',
      token: 'SEN-KAI KLP',
      tokenDescription: 'BecoSwap',
      tokenDescriptionUrl: 'https://becoswap.com/farms',
      tokenAddress: '0x43951c209003A70dCA94c2a5b09342C9c84E58Ac',
      tokenDecimals: 18,
      earnedToken: 'pillowBecoSEN-KAI',
      earnedTokenAddress: '0x27ea5A8A132ADfc27d44aBA450091d3738fC32cC',
      earnContractAddress: '0x27ea5A8A132ADfc27d44aBA450091d3738fC32cC',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'beco-sen-kai',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'BecoSwap',
      assets: ['SEN', 'KAI'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x43951c209003A70dCA94c2a5b09342C9c84E58Ac',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0x43951c209003A70dCA94c2a5b09342C9c84E58Ac',
    }, 
    {
      id: 'dfl-dragon',
      name: 'Dragon',
      token: 'Dragon',
      logo: 'single-assets/DRAGON.png',
      tokenDescription: 'Defily',
      tokenDescriptionUrl: 'https://defily.io/#/farms',
      tokenAddress: '0x18f4f7A1fa6F2c93d40d4Fd83c67E93B88d3a0b1',
      tokenDecimals: 18,
      earnedToken: 'pillowDflDragon',
      earnedTokenAddress: '0xB7A810615a80dF020a25723088a8DD308aF08EaD',
      earnContractAddress: '0xB7A810615a80dF020a25723088a8DD308aF08EaD',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'DFL',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Defily',
      assets: ['Dragon'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x256B8A99f69DBDBb5aC781E97f11080a336f5507',
      wrapTokenUrl: 'https://defily.io/#/dragon'
    },
    {
      id: 'ltd-ltd-kai',
      name: 'LTD-KAI KLP',
      token: 'LTD-KAI KLP',
      tokenDescription: 'Defily-Minifarm (LTD)',
      tokenDescriptionUrl: 'https://defily.io/#/mini-farms',
      tokenAddress: '0x1f95bD3A7d5c9DF6bF56504bbA948A7ADF1c3e27',
      tokenDecimals: 18,
      earnedToken: 'pillowLtdLTD-KAI',
      earnedTokenAddress: '0x3b86381eb1a496d5a1A72FE6cCB70ab3483aCaAD',
      earnContractAddress: '0x3b86381eb1a496d5a1A72FE6cCB70ab3483aCaAD',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'ltd-ltd-kai',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Defily-Minifarm (LTD)',
      assets: ['LTD', 'KAI'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x1f95bD3A7d5c9DF6bF56504bbA948A7ADF1c3e27',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0x1f95bD3A7d5c9DF6bF56504bbA948A7ADF1c3e27',
    },
    {
      id: 'ltd-kusd-vndc',
      name: 'KUSD-VNDC KLP',
      token: 'KUSD-VNDC KLP',
      tokenDescription: 'Defily-Minifarm (LTD)',
      tokenDescriptionUrl: 'https://defily.io/#/mini-farms',
      tokenAddress: '0xe504898459c682b95B60feD35de410a74216Fc92',
      tokenDecimals: 18,
      earnedToken: 'pillowLtdKUSD-VNDC',
      earnedTokenAddress: '0x944B75F01f941EDe52C6685aE178B05F08e1B84D',
      earnContractAddress: '0x944B75F01f941EDe52C6685aE178B05F08e1B84D',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'ltd-kusd-vndc',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Defily-Minifarm (LTD)',
      assets: ['KUSD', 'VNDC'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0xe504898459c682b95B60feD35de410a74216Fc92',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0xe504898459c682b95B60feD35de410a74216Fc92',
    },
    {
      id: 'beco-beco-kai',
      name: 'BECO-KAI KLP',
      token: 'BECO-KAI KLP',
      tokenDescription: 'BecoSwap',
      tokenDescriptionUrl: 'https://becoswap.com/farms',
      tokenAddress: '0x1eBbF8080149FF07381AFd148bA0AF007f78cD3c',
      tokenDecimals: 18,
      earnedToken: 'pillowBecoBECO-KAI',
      earnedTokenAddress: '0xEC58663962E03B1c209fe505921a98109c54eB9c',
      earnContractAddress: '0xEC58663962E03B1c209fe505921a98109c54eB9c',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'beco-beco-kai',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'BecoSwap',
      assets: ['BECO', 'KAI'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x1eBbF8080149FF07381AFd148bA0AF007f78cD3c',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0x1eBbF8080149FF07381AFd148bA0AF007f78cD3c',
    },
    {
      id: 'beco-kai-kusd',
      name: 'KAI-KUSD KLP',
      token: 'KAI-KUSD KLP',
      tokenDescription: 'BecoSwap',
      tokenDescriptionUrl: 'https://becoswap.com/farms',
      tokenAddress: '0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
      tokenDecimals: 18,
      earnedToken: 'pillowBecoKAI-KUSD',
      earnedTokenAddress: '0x46CA08Dc3742AfbB0d9d57B13Fc099C6adCA1e7a',
      earnContractAddress: '0x46CA08Dc3742AfbB0d9d57B13Fc099C6adCA1e7a',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'beco-kai-kusd',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'BecoSwap',
      assets: ['KAI', 'KUSD'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0x7cd3c7aFeDD16A72Fba66eA35B2e2b301d1B7093',
    },
    {
      id: 'dfl-dfl-kai',
      name: 'DFL-KAI KLP',
      token: 'DFL-KAI KLP',
      tokenDescription: 'Defily',
      tokenDescriptionUrl: 'https://defily.io/#/farms',
      tokenAddress: '0x256B8A99f69DBDBb5aC781E97f11080a336f5507',
      tokenDecimals: 18,
      earnedToken: 'pillowDflDFL-KAI',
      earnedTokenAddress: '0xa78236423Ee97D2204d2916889C97Ee4aCfCf80C',
      earnContractAddress: '0xa78236423Ee97D2204d2916889C97Ee4aCfCf80C',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'dfl-dfl-kai',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Defily',
      assets: ['DFL', 'KAI'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x256B8A99f69DBDBb5aC781E97f11080a336f5507',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0x256B8A99f69DBDBb5aC781E97f11080a336f5507',
    },
    {
      id: 'dfl-dfl-kusd',
      name: 'DFL-KUSD KLP',
      token: 'DFL-KUSD KLP',
      tokenDescription: 'Defily',
      tokenDescriptionUrl: 'https://defily.io/#/farms',
      tokenAddress: '0x3e82F9290A28D4296d34d0c1e6E5366c4220248a',
      tokenDecimals: 18,
      earnedToken: 'pillowDflDFL-KUSD',
      earnedTokenAddress: '0xE1e3dfE6ef5927F84f9Fb2C8dC6e175AD977455B',
      earnContractAddress: '0xE1e3dfE6ef5927F84f9Fb2C8dC6e175AD977455B',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'dfl-dfl-kusd',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Defily',
      assets: ['DFL', 'KUSD'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0x3e82F9290A28D4296d34d0c1e6E5366c4220248a',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0x3e82F9290A28D4296d34d0c1e6E5366c4220248a',
    },
    {
      id: 'beco-dpet-kai',
      name: 'DPET-KAI KLP',
      token: 'DPET-KAI KLP',
      tokenDescription: 'BecoSwap',
      tokenDescriptionUrl: 'https://becoswap.com/farms',
      tokenAddress: '0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
      tokenDecimals: 18,
      earnedToken: 'pillowBecoDPET-KAI',
      earnedTokenAddress: '0x49a10B3523053CF270C4407b539282194bFCe2AC',
      earnContractAddress: '0x49a10B3523053CF270C4407b539282194bFCe2AC',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'beco-dpet-kai',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'BecoSwap',
      assets: ['DPET', 'KAI'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
    },
    {
      id: 'dfl-dpet-kai',
      name: 'DPET-KAI KLP',
      token: 'DPET-KAI KLP',
      tokenDescription: 'Defily',
      tokenDescriptionUrl: 'https://defily.io/#/farms',
      tokenAddress: '0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
      tokenDecimals: 18,
      earnedToken: 'pillowDflDPET-KAI',
      earnedTokenAddress: '0xdf629a3F4a9C0E2Db3b837df982E965BAc609D3A',
      earnContractAddress: '0xdf629a3F4a9C0E2Db3b837df982E965BAc609D3A',
      pricePerFullShare: 1,
      tvl: 0,
      oracle: 'lps',
      oracleId: 'dfl-dpet-kai',
      oraclePrice: 0,
      depositsPaused: false,
      status: 'active',
      platform: 'Defily',
      assets: ['DPET', 'KAI'],
      callFee: 0.5,
      withdrawalFee: '0.1%',
      buyTokenUrl: 'https://kaidex.io/exchange/0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
      addLiquidityUrl: 'https://kaidex.io/portfolio/add/0xDb504f611Ae0230bDc60A8F58FE89d3593EB28cE',
    }
];
