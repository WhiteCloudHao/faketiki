import { FormHelperText } from '@material-ui/core';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import * as React from 'react';
import { Controller } from "react-hook-form";


function PasswordField({name, label, form}) {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
     

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
     
      const {formState: {errors}} = form;
      

    return (
        <FormControl   error = {!!errors[name]}   style = {{margin: '12px 10%', width: '80%'}} variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <Controller 
        name = {name}
        id = {name}
       
        control = {form.control}
        render={({field: {onSubmit,onChange, value}}) => (
          
            <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={value}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ?<Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            }
            name ={name}
            label = {label}
            onSubmit = {onSubmit}
            onChange = {onChange}
           variant = "outlined"
          /> 
        )}
       />
            <FormHelperText error = {!!errors[name]}>{errors[name]?.message}</FormHelperText>
        </FormControl>
       
    )
}

export default PasswordField;