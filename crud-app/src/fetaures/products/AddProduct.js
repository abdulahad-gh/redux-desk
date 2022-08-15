import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './ProductSlice';

const AddProduct = () => {
    const products = useSelector(state => state.productsReducer.products)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const dispatch = useDispatch()

    const handleAddProduct = e => {
        e.preventDefault()
        const productExists = products.find(pd => pd.name == productName)

        if (!productName || !productPrice) {
            alert('please field every field')


        }
        else if (productExists) {
            alert('your product already exists')

        }

        else {
            const product = {
                id: products.length + 1,
                name: productName,
                price: productPrice
            }
            dispatch(addProduct(product))
            alert('product added successfully')



        }










    }
    return (
        <section>
            <h2>Add Product</h2>
            <div className='add-form'>
                <form>
                    <div className='input-field'>
                        <label htmlFor="productName">product name</label>
                        <input type="text" name="productName" id="productName" onChange={(e) => setProductName(e.target.value)} required />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="productPrice">product price</label>
                        <input type="number" name="productPrice" id="productPrice" onChange={e => setProductPrice(e.target.value)} required />
                    </div>
                    <button className='form-btn' onClick={handleAddProduct}>Add Product</button>

                </form>
            </div>

        </section>
    );
};

export default AddProduct;