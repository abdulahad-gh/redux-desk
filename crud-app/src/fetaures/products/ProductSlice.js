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
        showProduct: (state) => state,
        addProduct: (state, actions) => {
            state.products.push(actions.payload)
        },
        editProduct: (state, actions) => {
            const { id, name, price } = actions.payload
            const isBookExists = state.products.filter(pd => pd.id === id)
            if (isBookExists) {
                isBookExists[0].name = name;
                isBookExists[0].price = price
            }

        },
        deleteProduct: (state, actions) => {
            state.products = state.products.filter(pd => pd.id != actions.payload)
        }

    }
})

export const { showProduct, addProduct, editProduct, deleteProduct } = productSlice.actions


export default productSlice.reducer