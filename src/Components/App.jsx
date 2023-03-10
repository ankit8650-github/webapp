import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHome from './Admin/AdminHome'
import AdminAddMaincategory from './Admin/AdminAddMaincategory'
import AdminMaincategory from './Admin/AdminMaincategory'
import AdminUpdateMaincategory from './Admin/AdminUpdateMaincategory'
import AdminAddSubcategory from './Admin/AdminAddSubcategory'
import AdminSubcategory from './Admin/AdminSubcategory'
import AdminUpdateSubcategory from './Admin/AdminUpdateSubcategory'
import AdminAddBrand from './Admin/AdminAddBrand'
import AdminBrand from './Admin/AdminBrand'
import AdminUpdateBrand from './Admin/AdminUpdateBrand'
import AdminAddProduct from './Admin/AdminAddProduct'
import AdminProduct from './Admin/AdminProduct'
import AdminUpdateProduct from './Admin/AdminUpdateProduct'

import Footer from './Footer'

import Home from './Home'
import Navbar from './Navbar'
import Shop from './Shop'
import SingleProductPage from './SingleProductPage'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import ContactUS from './Contact'
import AdminContact from './Admin/AdminContact'
import AdminSingleContact from './Admin/AdminSingleContact'
import AdminUserList from './Admin/AdminUserList'
import AdminNewslatter from './Admin/AdminNewslatter'
import Cart from './Cart'
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop/:mc/:sc/:br' element={<Shop />} />
                    <Route path='/single-product/:_id' element={<SingleProductPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/update-profile' element={<UpdateProfile />} />
                    <Route path='/contact' element={<ContactUS />} />
                    <Route path='/cart' element={<Cart />} />

                    <Route path='/admin-home' element={<AdminHome />} />
                    <Route path='/admin-maincategory' element={<AdminMaincategory />} />
                    <Route path='/admin-add-maincategory' element={<AdminAddMaincategory />} />
                    <Route path='/admin-update-maincategory/:_id' element={<AdminUpdateMaincategory />} />
                    <Route path='/admin-subcategory' element={<AdminSubcategory />} />
                    <Route path='/admin-add-subcategory' element={<AdminAddSubcategory />} />
                    <Route path='/admin-update-subcategory/:_id' element={<AdminUpdateSubcategory />} />
                    <Route path='/admin-brand' element={<AdminBrand />} />
                    <Route path='/admin-add-brand' element={<AdminAddBrand />} />
                    <Route path='/admin-update-brand/:_id' element={<AdminUpdateBrand />} />
                    <Route path='/admin-product' element={<AdminProduct />} />
                    <Route path='/admin-add-product' element={<AdminAddProduct />} />
                    <Route path='/admin-update-product/:_id' element={<AdminUpdateProduct />} />
                    <Route path='/admin-contact' element={<AdminContact/>} />
                    <Route path='/admin-single-contact/:_id' element={<AdminSingleContact/>} />
                    <Route path='/admin-userlist' element={<AdminUserList/>} />
                    <Route path='/admin-newslatter' element={<AdminNewslatter/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
