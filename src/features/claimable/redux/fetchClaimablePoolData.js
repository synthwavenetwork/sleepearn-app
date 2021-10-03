import { useSelector } from "react-redux";

export function useFetchClaimablePoolsData() {

  const { pools } = useSelector(
    state => ({
      pools: state.claimable.claimablePool,
    }),
  );

  return {
    pools
  };
}

export function useFetchClaimablePoolDetail(poolId) {
  const { pools } = useSelector(
    state => ({
      pools: state.claimable.claimablePool,
    }),
  );
  return pools.find((item) => item.id === poolId)
}