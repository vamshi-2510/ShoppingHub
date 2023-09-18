import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import productReducer from "./slices/productSlice";
import ordersReducer from './slices/ordersSlice'
import cartReducer from './slices/cartSlice'

export const store=configureStore({
    reducer:{
        users:userReducer,
        products:productReducer,
        orders:ordersReducer,
        cart:cartReducer
    }
})