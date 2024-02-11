import { green, orange } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles =  makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    color: green[800],
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    backgroundColor: orange[700],
  },
  link: {
    textDecoration: 'none',
    color: green[800]   
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));

export default useStyles;