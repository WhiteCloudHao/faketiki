import { Box, Container, makeStyles, Paper } from "@material-ui/core";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from './Cartitem';
import {removeAll} from '../cart/CartSlice'

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: '0 0 12px'
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
        padding: '0 20px'
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

function ProductCart() {
const cartItem = useSelector(state => state.cart.cartItem);
console.log(cartItem);
const classes = useStyle();
const totalAll = useMemo(() => {
   const result = cartItem.reduce((result, cart) => {
        return result+ cart.totalMoney ;
    }, 0)
    return result;
}, [cartItem])

const dispatch = useDispatch();
const removeAllProduct = () => {
    dispatch(removeAll());
}

  return (
        

        <Box style = {{backgroundColor: '#f5f5fa', marginBottom:'15px'}}>
            <Container>

            <h1 style = {{marginBottom:'15px', fontSize: '20px'}}>
            GIỎ HÀNG
            </h1>
           
           <Paper elevation = {0} className = {classes.root} >
               
                   <div  className ={classes.col1}>

                   <span>
                       Tất cả ({cartItem.length} sản phẩm) 
                   </span>
                   </div>
                   <div className ={classes.col2}>
                   <span>Đơn giá</span>
                   </div>
                   <div className ={classes.col3}>
                   <span>Số lượng</span>
                   </div>
                   <div className ={classes.col4}>
                   <span>Thành tiền</span>
                   </div>

                  <div className ={classes.col5}>
                  <span onClick = {removeAllProduct}>Xóa Tất Cả</span>

                  </div>
               
           </Paper>
          
           {cartItem.map((data) => (
               <CartItem key={data.id} data = {data} />
           ))}
            <h3 style = {{marginBottom:'15px', fontSize: '20px'}}>
            Tổng tiền: 
            <span style ={{color: 'rgb(255, 66, 78)', margin: '0 12px'}}>
                 {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalAll)}
            </span>
            </h3>
           
            </Container>
        </Box>
       
    );
}

export default ProductCart;