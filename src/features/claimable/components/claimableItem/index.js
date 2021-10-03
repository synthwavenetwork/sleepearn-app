import React from 'react';
import { styles } from './style';
import { makeStyles } from '@material-ui/core/styles';
import { useFetchClaimablePoolDetail } from '../../redux/hooks'
import {Grid, Avatar} from '@material-ui/core'
import Button from 'components/CustomButtons/Button';

const useStyles = makeStyles(styles);

export default function ClaimableItem({ claimblePoolId }) {
  const classes = useStyles();
  const poolData = useFetchClaimablePoolDetail(claimblePoolId)

  if (!poolData) return null

  return (
    <Grid item className={classes.container} xs={2} sm={4} md={3}>
      <Avatar 
        alt="Remy Sharp" 
        src={require('images/' + poolData.logo)}
        style={{margin: 'auto'}}
      />
      <div className={classes.title}>Use: <strong>{poolData.use.name}</strong></div>
      <Button
        className={classes.roundedBtn}
        href={`/claimable/${poolData.id}`}
      >
        Claim
      </Button>
    </Grid>
  );
}
