import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import ProductApi from '../../../api/productApi';
import ViewFilter from '../../../smallFeature/filters/viewFilter';
import ProductFilters from '../../../smallFeature/productFilters';
import ProductItem from '../../../smallFeature/productItem';
import ProductSort from '../../../smallFeature/productSort';
import ProductSkeleton from '../../../smallFeature/skeleton';
import './ProductList.scss';
import {useLocation, useNavigate} from 'react-router';
import queryString from 'query-string';
import { useMemo } from 'react';


function ProductLists() {
    const useStyle = makeStyles(theme => ({
        root: {},
        left: {
            width: '250px'
        },
        right: {
            flex: '1 1 0'
        },


        pagination: {
            justifyContent: "center",
            display: "flex",
            marginTop: "32px",
            paddingBottom: "20px"
        },
    })

    );
    const classes = useStyle();

    const navigate = useNavigate();
        const pathName = useLocation().pathname;
        const search = useLocation().search;
        
    
    const queryParams = useMemo(() => {
        const params = queryString.parse(search);
        return {
            ...params,
        _page: Number.parseInt(params._page) || 1,
        _limit: Number.parseInt(params._limit) || 12,
        _sort: params._sort || "salePrice:ASC",
        isPromotion: params.isPromotion === 'true',
        isFreeShip: params.isFreeShip === 'true',

        }
    }, [search])

    const [productList, setProductList] = useState([]);

    const [loading, setLoading] = useState(true);
    

    const [paginations, setPaginations] = useState({
        page: 1,
        limit: 12,
        total: 12
    });
   

    

    useEffect(
        () => {
            (async () => {
                try {
                    const { data, paginations } = await ProductApi.getAll(queryParams);
                    setProductList(data);
                    
                    setPaginations(paginations);


                } catch (error) {
                    console.log('Error in call ProductApi ', error);
                }
                setLoading(false);
            })();


        },
        [queryParams]);

        
        
        
        


    const handlePageChange = (e, page) => {
        
        const filters = {
            ...queryParams,
            _page: page,
        }

        navigate({
            pathname: pathName,
            search: queryString.stringify(filters),
        })
    };

    const handleSortChange = (newSort) => {
        
        const filters = {
            ...queryParams,
            _sort: newSort,
        }

        navigate({
            pathname: pathName,
            search: queryString.stringify(filters),
        })
    };

    const handleFiltersChange = (newFilters) => {
       
        const filters = {
            ...queryParams,
            ...newFilters,
        }

        navigate({
            pathname: pathName,
            search: queryString.stringify(filters),
        })
    };

    const handleViewFiltersChange = (newFilters) => {
        
        const filters = newFilters;

        navigate({
            pathname: pathName,
            search: queryString.stringify(filters),
        })
    };

    
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
                            <ViewFilter filters={queryParams} onChange={handleViewFiltersChange} />

                            {loading ? <ProductSkeleton /> : <ProductItem datas={productList} />}

                            <Box className={classes.pagination}>

                                <Pagination
                                    color="secondary"
                                    count={Math.ceil(paginations.total / paginations.limit)}
                                    page={paginations.page}
                                    onChange={handlePageChange} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};
export default ProductLists;