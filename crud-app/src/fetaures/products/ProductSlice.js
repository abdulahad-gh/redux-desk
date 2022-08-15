import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            { id: 1, name: 'mobile', price: 30000 },
            { id: 2, name: 'laptop', price: 130000 }
        ]
    },
    reducers: {
        showProduct: (state) => state

    }
})