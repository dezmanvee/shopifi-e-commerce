import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
  },
}));

export default useStyles;