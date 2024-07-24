
// import { useState } from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
import navCSS from './Nav.module.css'
import logo from './silogo.jpeg'



function Navbar(){
    return(
<header>
<nav className={navCSS.navbar}>
    <div className={navCSS.logoContainer} >
      <Link to='/'><img src={logo} alt='everything-si-logo' className={navCSS.logoImg} /></Link>
    </div>
    <ul>
        <Link to='/'><li className={navCSS.navLinks}>Home</li></Link>
        <Link to='/Products'><li className={navCSS.navLinks}>Products</li></Link>
        <Link to='/Contact'><li className={navCSS.navLinks}>Contact</li></Link>
    </ul>

  </nav>
</header>
    )
}



export default Navbar;