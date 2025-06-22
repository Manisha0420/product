import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "../features/reducers/userSlice"
import productSlice from "../features/reducers/ProductSlice"
export const store = configureStore({
    reducer:{
        userReducer : userSlice,
        productReducer: productSlice,
    },
})