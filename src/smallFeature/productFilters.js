import { Box } from "@material-ui/core";
import FiltersCategory from "./filters/filterCategory";
import FilterPrice from "./filters/filterPrice";
import FilterService from "./filters/filterService";


function ProductFilters({filters, onChange}) {

    const handleFiltersCategoryChange = (categoryId) => {
        if(!onChange) return;
        const newFilters = {
            "category.id": categoryId,
        };
      
        onChange(newFilters);
    } 

    const handleChange = (newValues) => {
        if(onChange) onChange(newValues);
    }

    return (
        <Box>
            <FiltersCategory onChange = {handleFiltersCategoryChange}/>
            <FilterPrice onChange = {handleChange} />
            <FilterService filters = {filters} onChange = {handleChange} />
        </Box>
    )
}

export default  ProductFilters;