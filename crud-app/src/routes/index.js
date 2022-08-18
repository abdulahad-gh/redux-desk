import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from '../feature/product/AddProduct'
import EditProduct from '../feature/product/EditProduct'
import ProductView from '../feature/product/ProductView'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Navbar from '../pages/Shared/Navbar'


const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/show-products' element={<ProductView />} />
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/edit-product' element={<EditProduct />} />
                <Route path='*' element={<Error />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Index