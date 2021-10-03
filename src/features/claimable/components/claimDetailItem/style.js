import { primaryColor } from 'assets/jss/material-kit-pro-react';

const styles = theme => ({
  numericInput: {
    color: primaryColor[0],
  },
  claimContainer: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #DED9D5',
    padding: '20px',
    position: 'relative',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '24px',
  },
  roundedBtn: {
    margin: '0 10px',
    padding: '12px 5px',
    minWidth: '185px',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    borderRadius: '5px',
    backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },
});

export { styles };
