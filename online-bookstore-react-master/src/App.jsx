import { useState } from 'react'
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services';
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import ProductDetailCard from "./components/ProductDetailCard"
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './components/Footer';
import ForgotPassword from './Pages/ForgotPassword';
import Cart from './Pages/Cart';
import Checkout from "./Pages/Checkout";
import ThankYou from "./Pages/ThankYou";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} / >
        <Route path='/services' element={<Services/>} / >
        <Route path='/contact' element={<Contact/>} / >
        <Route path='/products' element={<Products/>} / >
        <Route path='/login' element={<Login/>} / >
        <Route path='/forgot-password' element={<ForgotPassword/>} / >
        <Route path='/register' element={<Register/>} / >
        <Route path='/product-detail' element={<ProductDetailCard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
      
        <Route path="/cart" element={<Cart />} />
       



      </Routes>
      <Footer/>
    </>
  )
}

export default App
