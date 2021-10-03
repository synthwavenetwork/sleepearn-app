import React from 'react';
import { styles } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/CustomButtons/Button';

const useStyles = makeStyles(styles);

export default function ClaimDetailItem({use, receive}) {

  const classes = useStyles();

  return (
    <Button 
      className={classes.roundedBtn}
      onClick={() => {
        window.open(receive.url, '_blank')
      }}
      disabled={Date.now() < receive.enableTime}
    >
      Claim {receive.name}
    </Button>
  );
}