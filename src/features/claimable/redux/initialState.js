import {kardiaClaimablePools} from '../../configure'
const claimablePool = kardiaClaimablePools

const initialState = {
  claimablePool,
  fetchApprovalPending: {}
};

export default initialState;
