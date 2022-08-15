import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, name: 'mobile', price: 30000 },
        { id: 2, name: 'laptop', price: 130000 }
    ]
}
export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        showProduct: (state) => state

    }
})

export const { showProduct } = productSlice.actions


export default productSlice.reducer