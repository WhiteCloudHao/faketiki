import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Addlabel from "./Addlabel";
import AddQuantity from "./AddQuantity/AddQuantity";


const useStyle = makeStyles(theme => ({
    root: {
        padding: '12px'
    }
}))

function AddToCart({data, onSubmit}) {
    const classes = useStyle();
   
    return (
        <Box className = {classes.root}>
            <Addlabel />
            <AddQuantity data = {data}/>
          
        </Box>
    );
}

export default AddToCart;