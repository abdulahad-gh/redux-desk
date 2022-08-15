import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../fetaures/products/ProductSlice'
const store = configureStore({
    reducer: {
        productsReducer: productReducer
    }

})

export default store;