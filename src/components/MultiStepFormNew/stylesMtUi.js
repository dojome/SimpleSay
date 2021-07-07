import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  root: {
    flexGrow: 1,        
  },  
  typography: {    
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  multiStepFormNavBar: {    
 
  },  
  paper: {
    //background: 'linear-gradient(45deg, #F1F3F3 30%, #FFFAFA 90%)',
    background: '#F1F3F3',
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    padding: theme.spacing(2),
    textAlign: 'center',    
    display: 'block',    
    height: '100%',
  },  
  paperGallery: {    
    background: '#F1F3F3',    
    marginLeft: theme.spacing(5), 
    marginRight: theme.spacing(2),
    textAlign: 'center',    
    display: 'block',    
    height: '100%',
    margin: 'auto',
  },  
  step: {
    color: 'black',
  },
  stepper: {    
    backgroundColor: '#F9FAFA',
    iconColor: 'green', // or logic to change color
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
  },
  icon:{
    color: '#2C639A',    
    "&$activeIcon": {
      color: '#2C639A',
    },
    "&$completedIcon": {
      color: '#6495C6',
    }
  },
activeIcon: {},
completedIcon: {},

radioGroup: {
  padding: "25px",
  flexDirection: 'row',
  justifyContent: 'space-around',
  borderBottom: "1px solid #E5E5E5",
},
radio: {  
  '&$checked': {
    color: '#6495C6',   
  }
},
checked: {},
advert: {    
  alignItems: 'center',
  width: '80%',
  textAlign: 'center',
  margins: 'auto'  
}

}));
