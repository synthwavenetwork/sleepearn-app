export const networkSettings = {
  0: {
    chainId: `0x${parseInt(56, 10).toString(16)}`,
    chainName: 'KardiaChain',
    nativeCurrency: {
      name: 'KardiaChain Token',
      symbol: 'KAI',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.kardiachain.io'],
    blockExplorerUrls: ['https://explorer.kardiachain.io/'],
  }
};

export const networkSetup = chainId => {
  return new Promise((resolve, reject) => {
    const provider = window.ethereum;
    if (provider) {
      if (networkSettings.hasOwnProperty(chainId)) {
        provider
          .request({
            method: 'wallet_addEthereumChain',
            params: [networkSettings[chainId]],
          })
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`No network settings configured for chainId: '${chainId}'`));
      }
    } else {
      reject(new Error(`window.ethereum is '${typeof provider}'`));
    }
  });
};

export const getRpcUrl = () => {
  const settings = networkSettings['0'];
  return settings.rpcUrls[0];
};
