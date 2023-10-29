import React from 'react'
import logo from '../assets/Logo.png'
import { NavHashLink } from 'react-router-hash-link';
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <section className='nav_bar'>
      <div className='nav' >
        <div>
             <img className='logo' src={logo} alt="logo" />
         </div>

         <div className='navigation' >
           <ul>
            
            <NavHashLink className="li" to="#Home">Home</NavHashLink>
            <NavHashLink className="li" to="#About-Us">ABOUT US</NavHashLink>
            <NavHashLink className="li" to="#Collection">COLLECTION</NavHashLink>
            <NavHashLink className="li" to="#Blog">BLOG</NavHashLink>
            <NavHashLink className="li" to="#Faq">FAQ</NavHashLink>
            <NavHashLink className="li" to="#Contact-Us">CONTACT US</NavHashLink>
           </ul>
         </div>

      </div>
      <div className='social_links'>
           <NavHashLink to="https://www.instagram.com/_afom/?hl=en" target='_blank'> < CiInstagram style={{color: 'white', fontSize:'28px'}}   className='social_link'/> </NavHashLink>
           <NavHashLink to="#"><CiFacebook style={{color: 'white', fontSize:'28px'}}  className='social_link'/> </NavHashLink>
           <NavHashLink to="#"> <FaXTwitter style={{color: 'white', fontSize:'28px'}}  className='social_link'/> </NavHashLink>
         </div>
    </section>
    
  )
}

export default Navbar
