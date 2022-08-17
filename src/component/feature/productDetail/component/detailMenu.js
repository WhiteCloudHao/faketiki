import { Box, makeStyles } from "@material-ui/core";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Describe from "./Describe";
import Detail from "./Detail";
import Review from "./Review";


const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
        padding: '20px 0',

        
    },

    list: {
        listStyle: 'none'
    }


}))

function DetailMenu({data}) {

    const classes = useStyle();

    return (
       <Box >
           <ul className = {classes.root}>

           <Link style = {{textDecoration: 'none', margin: '0 8px', color: 'red',}} to= "">Thông tin sản phẩm</Link>
           <Link style = {{textDecoration: 'none', margin: '0 8px', color: 'red',}} to= "Describe">Mô tả sản phẩm</Link>
           <Link style = {{textDecoration: 'none', margin: '0 8px', color: 'red',}} to= "Review">Đánh giá của khách hàng</Link>
           </ul>

           <Routes>
               <Route path ="" element = {<Detail />} />
               <Route path ="Describe" element = {<Describe data = {data}/>} />
               <Route path ="Review" element = {<Review />} />
           </Routes>
       </Box>
    );
}

export default DetailMenu;