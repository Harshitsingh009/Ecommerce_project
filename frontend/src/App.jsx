import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <div className='px-4 sm:px-[5vw] md:pd-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product/:productid' element={<Product/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/placeorder' element={<PlaceOrder/>}/>
          

      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App