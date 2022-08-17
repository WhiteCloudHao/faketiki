import Dialog from '@mui/material/Dialog';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../testForm/loginForm';
import { login } from './userSlice';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router';

const useStyle = makeStyles(theme => ({
  root: {},
  changeForm: {
    textAlign: 'center',
   
  }, 
  changeLink: {
    textDecoration: 'none',
    padding: '0 4px',
    color: 'red',
   
  }
}));
export default function SignIn() {
  const classes = useStyle();

  const navigate = useNavigate();


  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();

  const [open, setOpen] = React.useState(true);
  const handleDialong = () => {
    setOpen(!open);
  }

  const handleSubmit = async (values) => {
    try {
    
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      handleDialong();
      navigate('/')
    } catch (error) {
      console.log('fail to login: ', error);
      enqueueSnackbar(error.message, {variant: 'error'});
    
      
    }
  }

 
  return (
    <Dialog  open= {open}>
      <LoginForm onSubmit = {handleSubmit}/>
      <p className = {classes.changeForm}>Bạn mới biết chúng tôi?
         <a href= "/signUp" className={classes.changeLink}>Đăng ký ngay bạn ơi</a>
      </p>
    </Dialog>
  );
}