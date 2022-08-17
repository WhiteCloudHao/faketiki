import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../auth/userSlice";
import cartReducer from './CartSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: UserSlice,
    }
})

export default store;