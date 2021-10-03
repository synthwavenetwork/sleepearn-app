import { primaryColor } from 'assets/jss/material-kit-pro-react';

const styles = theme => ({
  roundedBtn: {
    margin: '0 10px',
    padding: '5px 30px',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    borderRadius: '20px',
    backgroundColor: primaryColor[0],
    '& .MuiButton-label': {
      color: 'white',
    },
  },

  divider: {
    margin: '10px 0',
  },

  container: {
    border: '1px solid #DED9D5',
    padding: '20px',
    position: 'relative',
    textAlign: 'center',
    alignItem: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    marginBottom: '24px',
    backgroundColor: "#FBF6F0"
  },
  title: {
    marginTop: 12,
    marginBottom: 12
  }
});

export { styles };
