import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";

import  './controlQuantity.scss';

function ControlQuantity({Quantity, ChangeQuantity}) {

    const [quantity, setQuantity] = useState(Quantity);
    const reduceQuantity = (value) => {
        if(value > 1) setQuantity(value-1);
        else setQuantity(1)
    }

    const increaseQuantity = () => {
        setQuantity(prev => ++prev);
    }
    const handleChangeQuantity = (value) => {   
        if(value >= 1 ) {
            setQuantity(value);   
        } else setQuantity('');
      
  }

  const blurQuantity = (value) => {
    if(value >= 1 ) {
        setQuantity(value);
    } else setQuantity(1);
  }

  useEffect(() => {
    if(ChangeQuantity) ChangeQuantity(quantity);
    console.log(typeof quantity)
  }, [ChangeQuantity, quantity])
   
    return (

                <Box className="addQuantity">
                    <button 
                    className = {quantity === 1?"addQuantity__Adjusted hover opacity": "addQuantity__Adjusted hover"}
                    onClick={() =>  reduceQuantity(quantity)}>
                        -
                    </button>
                    <input 
                    className ="addQuantity__Adjusted addQuantity__mount"
                    value={quantity} 
                    type='number'
                    
                    onChange ={ (e) => handleChangeQuantity(e.target.value)}
                    onBlur = {(e) => blurQuantity(e.target.value)}
                    
                    />
                    <button 
                    className ="addQuantity__Adjusted hover"
                    onClick={increaseQuantity}
                    >
                    +
                    </button>
                </Box>
    );
}

export default ControlQuantity;