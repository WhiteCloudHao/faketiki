import { Box, TextField, Typography, Button, makeStyles} from "@material-ui/core";
import { useState } from "react";



function FilterPrice( { onChange } ) {

    const useStyles = makeStyles(theme => ({ 
        root: {
            borderTop: '1px solid #ccc',
            padding: theme.spacing(2)
        },

        range: {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItem: 'center',
            margin: '8px 0',

            '& > span': {
                margin: '0 8px'
            }
        }
    }))
    
    const classes = useStyles();

    const [values, setValues]  = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handlePriceChange = (e) => {
        const { name, value }= e.target;

        setValues((prevValues) => ({
            ...prevValues,
            [name] : value,
        }))
    }

    const handleSubmit = () => {
        if(onChange) onChange(values)

        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" color = "secondary">Giá</Typography>
            <Box className={classes.range} >

            <TextField name = "salePrice_gte" value ={values.salePrice_gte} onChange = {handlePriceChange} />
                <span>-</span>
            <TextField name = "salePrice_lte" value ={values.salePrice_lte} onChange = {handlePriceChange} />
            </Box>
            <Button variant="outlined" color ="primary" size="small" onClick = {handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    )
}

export default FilterPrice;