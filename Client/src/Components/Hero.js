import React, { useEffect } from "react";
import { useState } from "react";

function Hero() {
    let hero_image1
    let hero_image2
    let hero_image3
    const loadDom=()=>{
         hero_image1= document.getElementById("hero-image1") && document.getElementById("hero-image1");
  hero_image2 = document.getElementById("hero-image2") && document.getElementById("hero-image2");
   hero_image3= document.getElementById("hero-image3") && document.getElementById("hero-image3");
    }
    
    useEffect(()=>{
        loadDom()
    },[])
  
  let status = 0;
  const timer = () => {
    status++;
    if (status === 1) {
        if(hero_image1){
            hero_image2.style.zIndex=1;
            hero_image3.style.zIndex=5;
            hero_image1.style.zIndex=-1;
            hero_image1.style.left="96%";
            hero_image2.style.left="30%";
            hero_image3.style.left="63%";
            
        }
    }else if (status === 2) {
        if(hero_image1){
            hero_image1.style.zIndex=1;
            hero_image2.style.zIndex=-3;
            hero_image3.style.zIndex=1;
            hero_image1.style.left="63%";
            hero_image2.style.left="96%";
            hero_image3.style.left="30%";
        }
    }else if (status === 3) {
        if(hero_image1){
            hero_image1.style.zIndex=1;
            hero_image2.style.zIndex=1;
            hero_image3.style.zIndex=-4;
            hero_image1.style.left="30%";
            hero_image2.style.left="63%";
            hero_image3.style.left="96%";
        }
      status = 0;
    }
  };
  setInterval(timer,3000)
  return (
    <section className="hero" id="Home">
      <div className="hero-left">
        <div className="hero-left_content">
          <p className="collection-year">Best 2023 collection</p>
          <h1 className="slogan">
            elegance is the beauty that never fades
          </h1>
          <p className="company-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            laborum atque aut consectetur sint neque dicta sed eligendi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            consequatur blanditiis?
          </p>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image1" id="hero-image1">
          <div className="hero-image1-background"></div>
        </div>
        <div className="hero-image2" id="hero-image2">
          <div className="hero-image2-background"></div>
        </div>
        <div className="hero-image3" id="hero-image3">
          <div className="hero-image3-background"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
