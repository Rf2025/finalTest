

import React from 'react';
import footerCSS from './CSS/Footer.module.css'; 
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.jpeg'
import logo from './images/silogo.jpeg'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div className={footerCSS.footerLogoContainer}>
       <a href="/home"><img src={logo} className={footerCSS.footerLogo} alt="everythingSi-logo"></img></a>
      </div>
      <div className={footerCSS.footerContent}>
        <div className={footerCSS.newsletterContainer}>
          <h2>Newsletter</h2>
          <p>Keep up with our newest products!</p>
          <form>
            <input type="email" name="email" placeholder="Your email address" className={footerCSS.input} />
            <button type="submit" className={footerCSS.subBtn}>Subscribe</button>
          </form>
        </div>

        <div className={footerCSS.footerLinks}>
          <div className={footerCSS.footerContainer}>
         <h3>Policies</h3>
          <Link to='/'>Privacy Policy</Link>
          <Link to='/'>Terms and Conditions</Link>
          <Link to='/'>Shipping</Link>
          <Link to='/'>Returns</Link>
          <Link to='/'>Cancellation Policy</Link>
          </div>

          <div className={footerCSS.footerContainer}>
            <h3>Site Links</h3>
            <Link to='/'>Home</Link>
           <Link to='/Products'>Products</Link>
           <Link to='/Contact'>Contact</Link>
           <Link to='/'>Custom Tunes</Link>
           <Link to='/'>Careers</Link>
           <Link to='/'>Car Meets</Link>
          </div>

          <div className={footerCSS.footerContainer}>
            <h3>Tech Tips</h3>
            <Link to='/'>How to modify your car</Link>
            <Link to='/'>Choosing the right tune</Link>
            <Link to='/'>Custom E-tunes</Link>
          </div>
        </div>
      </div>
      <div className={footerCSS.socialHeading}>
     <h3>Follow us on social media!</h3>
     </div>
      <div className={footerCSS.socialIconsContainer}>
    
        <a href="https://wwww.facebook.com" target='_blank' rel="noreferrer" className={footerCSS.links}>
           <img className={footerCSS.socialIcon}  src={facebook} alt="facebookLogo"/>
        </a>
        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer" className={footerCSS.links}>
           <img className={footerCSS.socialIcon}  src={instagram} alt="instagramLogo"/>
        </a>
        <a href="https://x.com/?lang=en" target='_blank' rel="noreferrer" className={footerCSS.links}>
            <img className={footerCSS.socialIcon}  src={twitter} alt="twitterLogo"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
