import React from 'react';
import { useSelector } from 'react-redux';

const ProductView = () => {
    const products = useSelector(state => state.productsReducer.products)



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
                                    <button>Delete</button>
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