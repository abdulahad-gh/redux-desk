import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from '../pages/Error';
import Home from '../pages/Home';
import Navbar from '../pages/Shared/Navbar';

const index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Error />} />

                </Routes>

            </main>

        </BrowserRouter>
    );
};

export default index;