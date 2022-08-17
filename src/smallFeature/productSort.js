
import { Tab, Tabs} from "@material-ui/core";



function ProductSort({currentSort, onChange }) {
    const handleSortChange = (event, newSort) => {
        if(onChange) onChange(newSort);
    }
    return (
        <Tabs
        value={currentSort}
        onChange={handleSortChange}
        aria-label="disabled tabs example">
             <Tab label=" Giá từ thấp đến cao" value = "salePrice:ASC" /> 
             <Tab label=" Giá từ cao đến thấp" value = "salePrice:DESC" />
        </Tabs>
    )
}

export default ProductSort;