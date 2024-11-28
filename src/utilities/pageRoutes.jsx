import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../router/views/Home'
import Products from '../router/views/Products'
import CartPage from '../router/views/Cart'
import Checkout from '../router/views/Checkout'
import UserDashboard from '../router/views/UserDashboard'
import AdminDashboard from '../router/views/AdminDashboard'
import AuthPage from '../router/user/AuthPage'
import PetsPage from '../router/views/Pets'
import ServicesPage from '../router/views/ServicePage'
import AboutPage from '../router/views/About'
import ContactPage from '../router/views/Contact'


const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pets" element={<PetsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/auth" element={<AuthPage />} />
            
        </Routes>
    )
}

export default PageRoutes;