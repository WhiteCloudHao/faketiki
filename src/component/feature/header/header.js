import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import { AccountCircleOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { logout } from '../../auth/userSlice';



const useStyles = makeStyles(theme => ({
  link: {
    color: '#fff',
    textDecoration: 'none'
  },

  row: {
    display: 'flex',
    texalign: 'justify'
  }
}))

function Header() {
const classes = useStyles();

const signIn = JSON.parse(localStorage.getItem('user'))
const isSignIn = !!signIn;

const navigate = useNavigate();
const dispatch = useDispatch();

const handleSignUp = () => {
  navigate('/signUp')
}
const handleSignIn = () => {
  navigate('/signIn')
}

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClose = () => {
  setAnchorEl(null);
}

const handleControlAccountMenu =(e) => {
  setAnchorEl(e.currentTarget);
}

const handleLogout = () => {

  setAnchorEl(null);
  localStorage.removeItem('user');
  localStorage.removeItem('access_token');
  dispatch(logout());
}

  return (
    <div>
    <Box style = {{padding: '0 0px 32px'}}>
      <AppBar position="static">
        <Toolbar className={classes.row}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to = '/' className={classes.link} >
          
           MoonLaugh
          </Link>
          </Typography>
          

         {!isSignIn && ( 
           <>

             <Button color="inherit" onClick = {handleSignIn}>Đăng nhập</Button>
             <Button color="inherit" onClick = {handleSignUp}>Đăng ký</Button>
           </>
         )
          }

          {isSignIn &&
            <AccountCircleOutlined
               id = 'accountAvartar'
               onClick = {handleControlAccountMenu}
             />
          }
        </Toolbar>
      </AppBar>
      <Menu
        id="accountMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl = {null}
        MenuListProps={{
          'aria-labelledby': 'accountAvartar',
        }}
      >
        <MenuItem onClick={handleClose}>Thông tin của tôi</MenuItem>
        <MenuItem onClick={handleClose}>Tài khoản của tôi</MenuItem>
        <MenuItem onClick = {handleLogout}>Đăng Xuất</MenuItem>
      </Menu>
    </Box>
  
  </div>
  );
}

export default Header;
