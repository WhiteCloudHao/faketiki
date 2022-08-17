import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from "@material-ui/core";
import { useParams } from "react-router";
import useGetId from "../../../smallFeature/customHook/useGetId";
import ProductThumnail from "../../../smallFeature/productThumnail";
import ProductDescribe from "../../../smallFeature/productDescribe";
import DetailMenu from "./component/detailMenu";
import AddToCart from "./addToCart/AddToCart";


function ProductDetail() {
    const useStyle = makeStyles(theme => ({
        root: {
            backgroundColor: 'rgb(245, 245, 250)',
        },
        left: {
            width: '450px'
        },
        right: {
            flex: '1 1 0',
            
        },


        pagination: {
            justifyContent: "center",
            display: "flex",
            marginTop : "32px",
            paddingBottom: "20px"

        },
    })
    
    )

    const classes = useStyle();
    const { id } = useParams();
    const idInfor = Number.parseInt(id);
    const {productInfor, loading} = useGetId(idInfor); 

    if(loading)
    return (
        <Box>
            <LinearProgress />
        </Box>
    )

        

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation ={0}> 
                
                <Grid container spacing={1}>
                    <Grid item  className={classes.left}>
                        <Paper elevation ={0}>
                            <ProductThumnail data = {productInfor} newWidth = '100%'/>
                        </Paper> 
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation ={0}>
                           <ProductDescribe data = {productInfor}/>
                        </Paper> 
                        <Paper elevation ={0}>
                            <AddToCart data = {productInfor}/>
                        </Paper>
                    </Grid>

                </Grid>
                </Paper>
                <Grid>
                    <Paper elevation = {0} >

                    <DetailMenu data = {productInfor}/>
                    </Paper>
                </Grid>

            </Container>
        </Box>
    )
}

export default ProductDetail;