import { Box, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: '12px'
    },

    titleProduct: {
        margin: '0',
        padding: '0',
        fontSize: '20px',
        fontWeight: '500',
        color: '#d82bbbcc'
    },

    describeProduct:{
        color: 'rgb(36, 36, 36)'
    },

    originalPrice: {
        textDecoration: 'line-through'
    },

    promotionPercent: {
        color: "rgb(255, 66, 78)"
    }




}))

function ProductDescribe({data}) {
    const classes= useStyles(); 

    return (
        <Box  className={classes.root}>
            <h3 className={classes.titleProduct}>
                {data.name}
            </h3>
            <p className={classes.describeProduct}>
                {data.shortDescription}
            </p>
            <Box >
            <Box component= "span" fontSize="20px" fontWeight="500" color ="rgb(255, 66, 78)" mr ={1}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.salePrice)}
           </Box>
           <Box component= "span" fontSize="14px"   fontWeight="400"  mr ={1} className={classes.originalPrice}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.originalPrice)}
           </Box>
                <span className={classes.promotionPercent} >{data.promotionPercent > 0?` -${data.promotionPercent}%`: ''}</span>
            </Box>
        </Box>
    );
}

export default ProductDescribe;