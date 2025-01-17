import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  STAKE_FETCH_STAKE_BEGIN,
  STAKE_FETCH_STAKE_SUCCESS,
  STAKE_FETCH_STAKE_FAILURE,
} from './constants';
import { enqueueSnackbar } from '../../common/redux/actions';

export function fetchStake(index, amount) {
  return (dispatch, getState) => {
    // optionally you can have getState as the second argument
    dispatch({
      type: STAKE_FETCH_STAKE_BEGIN,
      index,
    });
    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise(async (resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const { home, stake } = getState();
      const { address, web3 } = home;
      const { pools } = stake;
      const { earnContractAbi, earnContractAddress } = pools[index];
      const contract = new web3.eth.Contract(earnContractAbi, earnContractAddress);

      contract.methods
        .stake(amount)
        .send({ from: address })
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
          dispatch(
            enqueueSnackbar({
              key: new Date().getTime() + Math.random(),
              message: 'success',
              options: {
                variant: 'success',
              },
              hash: receipt.transactionHash,
            })
          );
          dispatch({ type: STAKE_FETCH_STAKE_SUCCESS, index });
          resolve();
        })
        // .on('error', function (error) {
        //   dispatch(
        //     enqueueSnackbar({
        //       message: error.message || error,
        //       options: {
        //         key: new Date().getTime() + Math.random(),
        //         variant: 'error',
        //       },
        //     })
        //   );
        //   dispatch({ type: STAKE_FETCH_STAKE_FAILURE, index });
        //   resolve();
        // })
        .catch(error => {
          dispatch({ type: STAKE_FETCH_STAKE_FAILURE, index });
          reject(error);
        });
    });
    return promise;
  };
}

export function useFetchStake() {
  // args: false value or array
  // if array, means args passed to the action creator
  const dispatch = useDispatch();

  const { fetchStakePending } = useSelector(state => ({
    fetchStakePending: state.stake.fetchStakePending,
  }));

  const boundAction = useCallback((data, amount) => dispatch(fetchStake(data, amount)), [dispatch]);

  return {
    fetchStake: boundAction,
    fetchStakePending,
  };
}

export function reducer(state, action) {
  const { fetchStakePending } = state;
  switch (action.type) {
    case STAKE_FETCH_STAKE_BEGIN:
      // Just after a request is sent
      fetchStakePending[action.index] = true;
      return {
        ...state,
        fetchStakePending,
      };

    case STAKE_FETCH_STAKE_SUCCESS:
      // The request is success
      fetchStakePending[action.index] = false;
      return {
        ...state,
        fetchStakePending,
      };

    case STAKE_FETCH_STAKE_FAILURE:
      // The request is failed
      fetchStakePending[action.index] = false;
      return {
        ...state,
        fetchStakePending,
      };

    default:
      return state;
  }
}
