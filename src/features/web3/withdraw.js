import { vaultABI } from '../configure';
import { enqueueSnackbar } from '../common/redux/actions';
import { fetchGasPrice } from './../web3/fetchGasPrice'

export const withdraw = async ({ web3, address, isAll, amount, contractAddress, dispatch }) => {
  const contract = new web3.eth.Contract(vaultABI, contractAddress);
  const gasPrice = await fetchGasPrice()
  const data = await _withdraw({ web3, contract, isAll, amount, address, dispatch, gasPrice });
  return data;
};

const _withdraw = ({ web3, contract, address, isAll, amount, dispatch, gasPrice }) => {
  return new Promise((resolve, reject) => {
    if (isAll) {
      contract.methods
        .withdrawAll()
        .send({ from: address, gasPrice: gasPrice })
        .on('transactionHash', function (hash) {
          dispatch(
            enqueueSnackbar({
              message: hash,
              options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
              },
              hash,
            })
          );
        })
        .on('receipt', function (receipt) {
          console.log(receipt);
          resolve();
        })
        .on('error', function (error) {
          console.log(error);
          reject(error);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    } else {
      contract.methods
        .withdraw(amount)
        .send({ from: address, gasPrice: gasPrice })
        .on('transactionHash', function (hash) {
          console.log(hash);
          dispatch(
            enqueueSnackbar({
              message: hash,
              options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
              },
              hash,
            })
          );
        })
        .on('receipt', function (receipt) {
          console.log(receipt);
          resolve();
        })
        .on('error', function (error) {
          console.log(error);
          reject(error);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    }
  });
};
