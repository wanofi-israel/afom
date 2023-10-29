import React from "react";
import Logo from "../assets/Logo.png";
import { NavHashLink } from "react-router-hash-link";

import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_container-over"></div>
      </div>
      <div className="footer-content">
        <img className="footer-logo" src={Logo} alt="logo" />
        <div className="footer-social_media">
          <div className="footer-icon">
            <NavHashLink to="https://www.instagram.com/_afom/?hl=en"><CiInstagram
              style={{ color: "whiteSmoke", fontSize: "28px" }}
              className="social_link"
            /></NavHashLink>
          </div>
          <div className="footer-icon">
           <NavHashLink to=""> <CiFacebook
              style={{ color: "whiteSmoke", fontSize: "28px" }}
              className="social_link"
            /></NavHashLink>
          </div>
          <div className="footer-icon">
           <NavHashLink to=""> <FaXTwitter
              style={{ color: "whiteSmoke", fontSize: "28px" }}
              className="social_link"
            /></NavHashLink>
          </div>
        </div>
        <div className="footer-nav">
          <ul>
            <NavHashLink to="#Home" className="fli">Home</NavHashLink>
            <NavHashLink to="#About-Us" className="fli">ABOUT US</NavHashLink>
            <NavHashLink to="#Collection" className="fli">COLLECTION</NavHashLink>
            <NavHashLink to="#Blog" className="fli">BLOG</NavHashLink>
            <NavHashLink to="#Faq" className="fli">FAQ</NavHashLink>
            <NavHashLink to="#Contact-Us" className="fli">CONTACT US</NavHashLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
