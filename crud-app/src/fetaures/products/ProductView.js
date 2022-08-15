import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from './ProductSlice';

const ProductView = () => {
    const products = useSelector(state => state.productsReducer.products)
    // const [deleteUserRes, setDeleteUserRes] = useState('')

    const dispatch = useDispatch()
    // console.log(deleteUserRes)
    let deleteId;

    const handleDeleteProduct = id => {
        deleteId = id

        // const deleteSure = prompt('are you sure?')
        // console.log(deleteSure);

        document.getElementById('delete-popup').style.display = 'flex'

    }
    const deleteYes = () => {
        document.getElementById('delete-popup').style.display = 'none'
        dispatch(deleteProduct(deleteId))
    }

    const noDelete = () => {
        document.getElementById('delete-popup').style.display = 'none'

    }

    return (
        <div className='all-products'>
            <h2>All Products</h2>

            <div id='delete-popup'>are you sure?
                <button className='btn-yes' onClick={deleteYes}>Yes</button>
                <button className='btn-no' onClick={noDelete}>No</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product => {
                            const { id, name, price } = product

                            return <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>
                                    <Link to='/edit-product' state={{ id, name, price }}><button>Edit</button></Link>
                                    <button onClick={() => handleDeleteProduct(id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </div>
    );
};

export default ProductView;