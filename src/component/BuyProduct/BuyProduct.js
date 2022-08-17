import { Route, Routes } from "react-router";
import Header from "../feature/header/header";
import ProductCart from "../feature/productCart/productCart";
import ProductDetail from "../feature/productDetail/productDetail";
import ProductLists from "../feature/ProductList/productList";


function BuyProduct() {
    return (
        <div className="BuyProduct">
        <Header />
        <Routes>
          <Route path= "/*" element = { <ProductLists />} />
          <Route path= "products/:id/*" element =  { <ProductDetail /> } />      
          <Route path = "cart" element = {<ProductCart />} />
        </Routes>
      </div>
    )
}
export default BuyProduct;