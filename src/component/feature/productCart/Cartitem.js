import { makeStyles, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ProductThumnail from "../../../smallFeature/productThumnail";
import ControlQuantity from "../../CommonElement/controlQuantity";
import { resetQuantity, remove } from "../cart/CartSlice";

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        
        margin: '0 0 12px',
        alignItems: 'center'
    },
    col1: {
        width: '360px',
        padding: '0 20px'
    },
    col2: {
        width: '160px',
        padding: '0 20px'
    },
    col3: {
        width: '100px',
        padding: '0 20px'
    },
    col4: {
        width: '80px',
        padding: '0 20px',
        color: 'rgb(255, 66, 78)'
    },
    col5: {
        width: '80px',
        padding: '0 20px',
        cursor: 'pointer',
        "&:hover": {
            opacity: '0.8',
            color: 'red'
        }
    }

}))

function CartItem({data}) {
const classes = useStyle();
const dispatch = useDispatch();
const setQuantity = (value) => {
    const quantity = parseInt(value);
   console.log(typeof quantity)
    const totalMoney = data.data.salePrice * quantity;
    const newItem = {
        id: data.id,
        quantity: quantity,
        totalMoney
    }

    const action = resetQuantity(newItem);
    dispatch(action);
}
const removeProduct = () => {
    dispatch(remove(data.data.id))
}
  
    return (
        <Paper elevation = {0} className = {classes.root} >
               
                   <div  className ={classes.col1}>
                        <ProductThumnail data ={data.data} newWidth = '36%' />

                   </div>
                   <div className ={classes.col2}>
                   <span> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.data.salePrice)}</span>
                   </div>
                   <div className ={classes.col3}>
                   <ControlQuantity Quantity ={data.quantity} ChangeQuantity = {setQuantity} />
                   </div>
                   <div className ={classes.col4}>
                   <span> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.totalMoney)}</span>
                   </div>

                  <div className ={classes.col5}>
                  <span onClick ={removeProduct}>Xóa</span>

                  </div>
               
           </Paper>
    );
}

export default CartItem;