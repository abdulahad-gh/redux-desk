import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editProduct } from './ProductSlice';

const EditProduct = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [id, setId] = useState(location.state.id)
    const [name, setName] = useState(location.state.name)
    const [price, setPrice] = useState(location.state.price)

    const editProductHandle = e => {
        e.preventDefault()


        dispatch(editProduct({
            id,
            name,
            price
        }))
        navigate('/show-products')

    }
    return (



        <section id='form-section'>
            <h2>Edit product</h2>

            <form onSubmit={editProductHandle}>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                </div>

                <div className="input-field">
                    <label htmlFor="price">Price</label>
                    <input type="number" value={price} name="price" id="price" onChange={e => setPrice(e.target.value)} />

                </div>

                <button className='form-btn'>Edit</button>


            </form>



        </section>
    );
};

export default EditProduct;