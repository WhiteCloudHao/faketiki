import {Box, Grid} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';



function ProductSkeleton({length = 12}) {

    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) =>  (
                    <Grid item key={index} xs ={12} sm ={6} md ={4} lg={3}>
                        <Box padding ={1}>

                     <Skeleton animation="wave" variant="circle" width={40} height={40} />
                       <Skeleton variant="rect" width='100%' height={205} />
                       <Skeleton variant="text" />
                        </Box>
                    </Grid>
                )
                )}
            </Grid>
        </Box>
    )
}

export default ProductSkeleton;