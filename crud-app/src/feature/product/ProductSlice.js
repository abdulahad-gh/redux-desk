import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv } = require('uuid')

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        product: [
            { id: uuidv(), name: 'mobile', price: 20000 },
            { id: uuidv(), name: 'laptop', price: 120000 }
        ]
    },
    reducers: {
        viewProducts: iniStateValue => iniStateValue.product,
        addProduct: (state, actions) => {
            state.product.push(actions.payload)
        },
        editProduct: (state, actions) => {
            const isProductExists = state.product.filter(pd => pd.id === actions.payload.id)
            if (isProductExists) {
                isProductExists[0].name = actions.payload.name
                isProductExists[0].price = actions.payload.price
            }

        },
        deleteProduct: (state, actions) => {
            state.product = state.product.filter(pd => pd.id != actions.payload.id)
        }

    }
})
export const { viewProducts, addProduct, editProduct, deleteProduct } = ProductSlice.actions


export default ProductSlice.reducer;