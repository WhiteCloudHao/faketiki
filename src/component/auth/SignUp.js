import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import TestForm from '../testForm/TestForm';
import {unwrapResult}  from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import { register } from './userSlice';
import { useSnackbar } from 'notistack';
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
export default function SignUp() {
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
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      enqueueSnackbar('Chúc mừng bạn đã đăng ký thành công', {variant: 'success'})
      console.log('newUser', user)
      handleDialong();
      navigate('/')
    } catch (error) {
      console.log('fail to register: ', error);
      enqueueSnackbar(error.message, {variant: 'error'});
    
      
    }
  }

 
  return (
    <Dialog  open= {open}>
      <TestForm onSubmit = {handleSubmit}/>
      <p className = {classes.changeForm}>Bạn đã có tài khoản?
         <a href= "/signIn" className={classes.changeLink}>Đăng nhập</a>
      </p>
    </Dialog>
  );
}