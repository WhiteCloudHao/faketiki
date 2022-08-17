import {Box, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import CategoryApi from "../../api/categoryApi";




function FiltersCategory({ onChange }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },

        menu: {
            '& > li': { 
                
                margintop: theme.spacing(1),
                listStyle: 'none',
                '&:hover': {
                    opacity: 0.95,
                    cursor: 'pointer'

                }
            }
        }
    }))

    const classes = useStyles();

    const [categoryList, setCategoryList] = useState([]);

    useEffect(()  => {
        ( async () => {

            try {
                const list = await CategoryApi.getAll();
                
                setCategoryList(
                        list.map(x => ({
                            id: x.id,
                            name: x.name,
                        }
                        ))    
                )
                
        
            } catch (error){
                console.log("fail to call categoryList api", error);
            }
        })();
    }, [])

    const handleCategoryChange = (category) => {
        
        if(onChange) onChange(category.id);
    }
    
    return (
        <Box className = {classes.root}>
            <Typography color = "secondary" variant="subtitle2" >
             Danh mục sản phẩm   
            </Typography >
            <ul className= {classes.menu}>
                {
                    categoryList.map((category) => (
                        <li key={category.id} onClick = {() => handleCategoryChange(category)}>
                            <Typography variant="body2" >{category.name}</Typography>
                        </li>
                    ))
                }
            </ul>
        </Box>
    )
}

export default FiltersCategory;