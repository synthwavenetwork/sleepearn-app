import React from 'react';
import { useFetchClaimablePoolsData } from './redux/hooks'
import ClaimableItem from './components/claimableItem'
import {Grid} from '@material-ui/core'

export default function ClaimableList() {

  const { pools } =
    useFetchClaimablePoolsData();

  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 4 }}>
      {
        pools.map((poolItem) => {
          return <ClaimableItem claimblePoolId={poolItem.id} />
        })
      }
    </Grid>
  );
}
