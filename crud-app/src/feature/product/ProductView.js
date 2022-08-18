import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from './ProductSlice';
import { Link } from 'react-router-dom'

const ProductView = () => {
    const products = useSelector(state => state.productReducer.product)
    const dispatch = useDispatch()
    return (
        <section>
            <h2>view all products</h2>

            <table>
                <thead>
                    <tr>

                        <th>name</th>
                        <th>price</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            const { id, name, price } = product
                            return <tr>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>
                                    <Link to='/edit-product' state={{ id, name, price }}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => dispatch(deleteProduct({ id }))}>Delete</button>
                                </td>

                            </tr>
                        })

                    }
                </tbody>
            </table>

        </section>
    );
};

export default ProductView;