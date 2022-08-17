import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from "@material-ui/core";


function FilterService({filters, onChange}) {
    const useStyles = makeStyles(theme => ({ 
        root: {
            borderTop: '1px solid #ccc',
            padding: theme.spacing(2)
        },

        list: {
            padding: theme.spacing(0),
            '& > li': {
                listStyle: 'none'
            }
        }
    }))
    
    const classes = useStyles();

   

    const services = [
        {value: 'isPromotion', label: 'Có khuyến mãi'},
        {value: 'isFreeShip', label: 'Vận chuyển miễn phí'}
    ];
    const handleServiceChange = (e) => { 
        if(!onChange) return; 
       const {name, checked} = e.target;

        onChange({[name]: checked})
    }
    
    
    

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" color = "secondary">Dịch vụ</ Typography>
            <ul className = {classes.list}> 
                {services.map((service) => 
                ( 

                    <li key={service.value}>
                        <FormControlLabel
                        label={service.label}
                        control={
                        <Checkbox
                        checked={Boolean(filters[service.value])}
                        name = {service.value}
                        onChange={handleServiceChange}
                        color = "secondary"
                        />
                        }
                    />
                    </li>
                        
                )
                )}
            </ul>
        </Box>
    )
}

export default  FilterService;