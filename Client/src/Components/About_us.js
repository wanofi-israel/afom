import React from "react";
import img1 from "../assets/bride.jpg";
import img2 from "../assets/men-model.jpg";

function About_us() {
  return (
    <section className="about_us" id="About-Us">
      <div className="about_us-container">
        <div className="about_us-left">
          <div className="about_us-left-top"></div>
          <div className="about_us-left-bottom">
            <p className="about_us-pitch">We create unforgettable, luxurious bridal attire to make your special day magical. Our exquisite designs and attention to detail guarantee elegance and sophistication. Walk down the aisle in style and grace with our extraordinary collection.</p>
          </div>
        </div>
        <div className="about_us-right">
          <div className="about_us-right-top">
            <h1 className="about_us-header">About us</h1>
            <p className="about-afom_des">Afom Bridal Company offers a wide range of exquisite bridal gowns and accessories, combining traditional sophistication with contemporary flair. Our knowledgeable and friendly staff is dedicated to providing exceptional service and helping brides feel confident and radiant. With carefully curated accessories, we ensure that every bride's ensemble is complete with grace and style. Choose Afom for excellence, creativity, and a touch of magic on your special day. Visit our beautiful boutique and embark on an unforgettable journey towards your dream wedding.</p>
          </div>
          <div className="about_us-right-bottom"></div>
        </div>
      </div>
      <div className="fixed_background">
        <div className="fixed_background-content">
          <h1 className="fixed_background-slogan">
          Elevate Your Style with AFOM - Where Fashion Meets Imagination!
          </h1>
          <p className="fixed_background-aboutFashion">
          Fashion is a sartorial art form that allows us to express our individuality and creativity. It is a dynamic and ever-evolving industry that has the power to influence society. Fashion is not just about clothes, it's about the aesthetic, the panache, and the elegance that comes with it. It's a way of life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About_us;
