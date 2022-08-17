import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "./InputField";
import PasswordField from './passWordField';


const useStyle = makeStyles(theme => ({
    root: {

    },

    avatar: {
        margin: "20px auto 12px auto"
    },
    title: {
        textAlign: 'center',
        color: theme.palette.primary.main
    },
    inputForm: {
        display: 'block',
        margin: '0 auto'
    },

    singUpButton: {
        display: 'block',
        width: '80%',
        margin: '16px auto 20px auto',
        padding: '7px',
        color: ''
    },

    progress: {
        textAlign: 'center',
        margin: "0 auto",
        padding: '12px 274px'
    },

}))


function LoginForm({onSubmit}) {

    const classes = useStyle();

    const schema = yup.object().shape({
       
        identifier: yup.string()
        .required('Bạn quên chưa nhập email rùi')
        .email('Email không hợp lệ'),
        password: yup.string()
        .required('Bạn chưa nhập mật khẩu')
        
      
       });

    const form = useForm({
    defaultValues: {
        
        identifier: '',
        password: '',
       
    },
    resolver: yupResolver(schema)
})

const handleSubmit = async (value) => {  
    if(onSubmit) await onSubmit(value);
}

const {isSubmitting} = form.formState;


    return (
        <div>
          {isSubmitting && <CircularProgress color="success" className = {classes.progress}/>}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} className= {classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.title}>
           Đăng Nhập
            </Typography>
            
            <form onSubmit = {form.handleSubmit(handleSubmit)}>
               
                <InputField name= 'identifier' label = 'Email' form = {form}/>
                <PasswordField name= 'password' label = 'Mật Khẩu' form = {form}/>
              
            <Button type = 'submit' color="primary"  variant = "contained"  className= {classes.singUpButton}>
                Đăng Nhập
            </Button>
            </form>

        </div>
    );
}

export default LoginForm;