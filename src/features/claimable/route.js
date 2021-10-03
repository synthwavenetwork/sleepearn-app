import { ClaimableList, ClaimableDetail } from '.';

export default {
  path: 'claimable',
  childRoutes: [
    { path: 'claimable', component: ClaimableList, isIndex: true },
    { path: ':claimableId', component: ClaimableDetail }
  ],
};
