import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../feature/product/ProductSlice'

const store = configureStore({
    reducer: {
        productReducer: ProductReducer
    }
})

export default store;

