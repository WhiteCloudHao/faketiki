const { createSlice}  = require('@reduxjs/toolkit')

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
       cartItem: [],
    },

    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const id = state.cartItem.findIndex(x => x.id === newItem.id);
        
          
           if (id >= 0) {
            state.cartItem[id].quantity += newItem.quantity;
            state.cartItem[id].totalMoney += newItem.totalMoney;
            console.log(typeof  state.cartItem[id].quantity)
        
           } else {
            state.cartItem.push(newItem); 
           }
          
        },
        resetQuantity(state, action) {
            const newItem = action.payload;
            const id = state.cartItem.findIndex(x => x.id === newItem.id);
            if (id >= 0) {
                state.cartItem[id].quantity =newItem.quantity;
                state.cartItem[id].totalMoney = newItem.totalMoney;
                
            }
        },
        remove(state, action) {
            const idRemove = action.payload;
            state.cartItem = state.cartItem.filter(x => x.id !== idRemove);
        },
        removeAll(state) {
            state.cartItem = [];
        }
    }
});

export const {addToCart, resetQuantity, remove, removeAll} = CartSlice.actions

export default CartSlice.reducer;