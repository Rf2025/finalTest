
// import { useState } from 'react'
// import {Link} from 'react-router-dom'
import React from 'react';
import navCSS from './Nav.module.css'
import logo from './silogo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function Navbar(){
    return(
<header>
  <nav className={navCSS.navbar}>
    <div className={navCSS.logoContainer} alt='everything-si-logo'>
    <Link to='/'><a href="/home">  <img src={logo} alt="everything-si logo" className={navCSS.logoImg}/></a></Link>
    </div>
    <ul>
      <Link to='/'><li><a className={navCSS.navLinks} href="/">Home</a></li></Link>
      <Link to='/Products'><li><a className={navCSS.navLinks} href="/Products">Products</a></li></Link>
      <Link to='/Contact'><li><a className={navCSS.navLinks} href="/Contact">Contact</a></li></Link>
    </ul>
<button className={navCSS.menuBtn}><FontAwesomeIcon icon={faBars}   alt="menu-icon"/></button>
  </nav>
</header>
    )
}



export default Navbar;