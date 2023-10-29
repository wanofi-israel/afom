import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
function Contact() {
  return (
    <section className="contacts">
      <div className="contact_container">
        <div className="form">
          <div className="contact_form">
            <p className="contact_ti">Let us know how we can help</p>

            <div className="form_field">
              <div class="contact_info">
               
                <input className="input" type="text" placeholder="Name" />
                <hr className="hr" />
              </div>
              <div class="contact_info">
             
                <input className="input" type="text" placeholder="Email"/>
                <hr className="hr" />
              </div>
              <div class="contact_info">
             
              <textarea className="input" name="" id="" cols="30" rows="10" placeholder="Comment" ></textarea>
             <hr className="hr" />
           </div>
           <button className='watch_more'>Send</button>
            </div>
          
        </div>
      </div>
      <div className="contact_back">
        <h3 className="contact_title"> Find us here </h3>
        <div className="contact_adress contact_location">
          <FaLocationDot />
          <div>Ethiopia,Addis Ababa Zambia avenu</div>
        </div>
        <div className="contact_adress contact_phone">
          <FaPhone />
          <div>+2519123456</div>
        </div>
        <div className="contact_adress contact_email">
          <BiLogoGmail />
          <div>afomdesign@gmail.com</div>
        </div>

        <div className="contact_social">
          <NavHashLink to="https://www.instagram.com/_afom/?hl=en">
            {" "}
            <AiFillInstagram className="contact_socials" />{" "}
          </NavHashLink>
          <NavHashLink to="#">
            {" "}
            <BsFacebook className="contact_socials" />{" "}
          </NavHashLink>
          <NavHashLink to="#">
            {" "}
            <FaSquareXTwitter className="contact_socials" />{" "}
          </NavHashLink>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;
