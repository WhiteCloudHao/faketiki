import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";



function InputField({name, label, form}) {
   
    
   
    return (
        <Controller 
        name = {name}
        control = {form.control}
        id = {name}

        render={({field: {onSubmit,onChange,value, }, fieldState: {invalid, error}}) => (
         
        <TextField 
            value = {value}
           
            onSubmit = {onSubmit}
            onChange = {onChange}
            label = {label}
            error = {invalid}
            helperText = {error?.message}
            variant = "outlined"
            style = {{margin: '12px 10%', width: '80%'}}
        
        > 
       
        </TextField>
            
            )}
        />
           
  
        
    )
}

export default InputField;