import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from './ProductSlice';

const ProductView = () => {
    const products = useSelector(state => state.productsReducer.products)

    const dispatch = useDispatch()

    const handleDeleteProduct = id => {
        dispatch(deleteProduct(id))

    }

    return (
        <div>
            <h2>All Products</h2>

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
                                    <button>Edit</button>
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