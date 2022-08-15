import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/show-products' className='nav-link'>Show Products</Link>
            <Link to='/add-product' className='nav-link'>Add Product</Link>

        </nav>
    );
};

export default Navbar;