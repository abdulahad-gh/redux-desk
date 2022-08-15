import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editProduct } from './ProductSlice';

const EditProduct = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [price, setPrice] = useState(location.state.price);
    const handleEdit = e => {
        e.preventDefault();
        dispatch(editProduct({ id, name, price }));
        navigate("/show-products", { replace: true });
    }

    return (
        <div>
            <h2>Edit product</h2>

            <form onSubmit={handleEdit}>
                <div className='input-field'>
                    <label htmlFor="productName">product name</label>
                    <input type="text" name="productName" id="productName" onChange={(e) => setName(e.target.value)} value={name} required />
                </div>
                <div className='input-field'>
                    <label htmlFor="productPrice">product price</label>
                    <input type="number" name="productPrice" id="productPrice" onChange={e => setPrice(e.target.value)} value={price} required />
                </div>
                <button className='form-btn' >Edit Product</button>

            </form>
        </div>
    );
};

export default EditProduct;