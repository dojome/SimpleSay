import React from 'react';
import clsx from 'clsx';
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import BusinessIcon from '@material-ui/icons/Business';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import RedeemIcon from '@material-ui/icons/Redeem';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Logo from '../Logo';
import * as Styles from './styles';
import { navigate } from '@reach/router';
import { Auth } from 'aws-amplify';
import { AppUser } from '../../Auth';
import { isLoggedIn } from '../../Auth/AppUser'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

const useStyles = makeStyles({
  list: { 
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const { logout } = AppUser
function logOut(e) {
  e.preventDefault()

  Auth.signOut()
    .then(logout(() => navigate('/')))
    .catch(err => console.log('error: ', err))
}


export default function TemporaryDrawer(props, isUserNav) {
  const loggedIn = isLoggedIn();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/search">
            <ListItemIcon><SearchIcon/></ListItemIcon>
            <ListItemText>Search</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/greeting-cards">
            <ListItemIcon><RedeemIcon/></ListItemIcon>
            <ListItemText>Greeting Cards</ListItemText>        
        </ListItem>
        <ListItem button className="snipcart-checkout">
            <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
            <ListItemText>Shopping Basket</ListItemText>
        </ListItem>
      </List>
      <Divider />             
       {loggedIn ? (
         <List>
          <ListItem button component={Link} to="/my-account">
              <ListItemIcon><AccountBoxIcon/></ListItemIcon>
              <ListItemText>My Account</ListItemText>
          </ListItem> 
          <ListItem button onClick={e => logOut(e)}>         
              <ListItemIcon><ExitToAppIcon/></ListItemIcon>
              <ListItemText>Sign Out</ListItemText>
          </ListItem> 
        </List>        
        )
        :
        ( 
         <List>       
          <ListItem button component={Link} to="/signin">
            <ListItemIcon><VpnKeyIcon/></ListItemIcon>
            <ListItemText>Sign In</ListItemText>
          </ListItem>         
         </List>
        )
       }             
      <Divider />      
        <ListItem button>
            <ListItemIcon><BusinessIcon/></ListItemIcon>
            <ListItemText>Corporate Sales</ListItemText>
        </ListItem>
      <Divider />
      <List>        
        <ListItem button>
            <ListItemIcon><ContactSupportIcon/></ListItemIcon>
            <ListItemText>Help</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon><ContactPhoneIcon/></ListItemIcon>
        <ListItemText>Contact Us</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/about">
            <ListItemIcon><InfoIcon/></ListItemIcon>
            <ListItemText>About</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <>              
    <div className="row">
      <div className="col-8">
        <Logo/> 
      </div>           
      <div className="col-2">                
      </div>
      <div className="col-2">          
        <div>      
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>   
                <Styles.MenuBtn>                
                  <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
                </Styles.MenuBtn>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}      
        </div>
      </div>
      </div>
      </>
  );
}

