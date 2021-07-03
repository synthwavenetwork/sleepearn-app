import KardiaClient from 'kardia-js-sdk';
import { getRpcUrl } from './../../common/networkSetup';
import BigNumber from 'bignumber.js';

const kardiaClient = new KardiaClient({ endpoint: getRpcUrl()});

export const fetchGasPrice = async () => {
    const gasPrice = await kardiaClient.kaiChain.getGasPrice()
    return new BigNumber(gasPrice).multipliedBy(2).toNumber();
}