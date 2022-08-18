import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './ProductSlice';
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()


    const addProductHandle = e => {
        e.preventDefault()


        const product = {
            id: uuidv4(),
            name,
            price
        }
        dispatch(addProduct(product))
        navigate('/show-products')


    }

    return (
        <section id='form-section'>
            <h2>Add product</h2>

            <form onSubmit={addProductHandle}>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />

                </div>

                <div className="input-field">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" onChange={e => setPrice(e.target.value)} />

                </div>

                <button className='form-btn'>Add</button>


            </form>

        </section>
    );
};

export default AddProduct;