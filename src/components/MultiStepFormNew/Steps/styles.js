import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  stepper: {
    backgroundColor: '#F9FAFA',
    padding: theme.spacing(5, 10, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#6495C6',
    color: 'white',
    width: '100px',	
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',  
  },
  button2: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),    
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',    
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));