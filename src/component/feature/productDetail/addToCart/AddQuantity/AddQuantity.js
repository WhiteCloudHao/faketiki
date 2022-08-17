import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import ControlQuantity from "../../../../CommonElement/controlQuantity";
import { addToCart } from '../../../cart/CartSlice';
import AddSubmit from "../AddSubmit";
import './AddQuantity.scss';


function AddQuantity({data}) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const quantityChange = (value) => {
        const values = parseInt(value)
        setQuantity(values)
    }

  

    const dispatch = useDispatch();
    

    const handleSubmit = () => {
        const totalMoney = data.salePrice * quantity;
        const newItem = {
            id: data.id,
            quantity: quantity,
            data,
            totalMoney
        }
         const action = addToCart(newItem);
         dispatch(action);
         navigate('/Cart')

    
    }


    return (
    <div>
        <ControlQuantity Quantity = {1} ChangeQuantity = {quantityChange} />
         <AddSubmit className ="hover addProudct" handleSubmit ={handleSubmit} />
    </div>
    );
}

export default AddQuantity;