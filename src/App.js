// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import  Products from './Products'
import Contact from './Contact'
import ErrorPage from './Errorpage'
function App() {


  return (
<Router>
  <div className='App'>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/Products' element={<Products/>}/>
   <Route path='/Contact' element={<Contact/>}/>
   <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer/>
  </div>
</Router>
  )
}

export default App
