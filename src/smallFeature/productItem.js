import { Box, Grid } from '@material-ui/core';
import ProductChildren from './productChildren';

function ProductItem({datas = []}) {


    return (
    
            <Box>
                <Grid container>
                    {datas.map((data) =>  (
                        <Grid item key={data.id} xs ={12} sm ={6} md ={4} lg={3}>
                           <ProductChildren data ={data} />
                        </Grid>
                    )
                    )}
                </Grid>
            </Box>
    )
}

export default ProductItem;