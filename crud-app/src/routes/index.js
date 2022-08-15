import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from '../fetaures/products/AddProduct';
import ProductView from '../fetaures/products/ProductView';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Navbar from '../pages/Shared/Navbar';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/show-products' element={<ProductView />} />
                    <Route path='/add-product' element={<AddProduct />} />
                    <Route path='*' element={<Error />} />

                </Routes>

            </main>

        </BrowserRouter>
    );
};

export default Index;