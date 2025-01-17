import { sleepearnKaiDexZapABI, kaidexRouterABI } from 'features/configure';

export const zapDepositEstimate = ({
  web3,
  zapAddress,
  vaultAddress,
  tokenAddress,
  tokenAmount,
}) => {
  const contract = new web3.eth.Contract(sleepearnKaiDexZapABI, zapAddress);
  return contract.methods.estimateSwap(vaultAddress, tokenAddress, tokenAmount).call();
  // { swapAmountIn uint256, swapAmountOut uint256, swapTokenOut address }
};

export const zapWithdrawEstimate = ({ web3, routerAddress, amountIn, reserveIn, reserveOut }) => {
  const contract = new web3.eth.Contract(kaidexRouterABI, routerAddress);
  return contract.methods.getAmountOut(amountIn, reserveIn, reserveOut).call();
  // { amountOut uint }
};
