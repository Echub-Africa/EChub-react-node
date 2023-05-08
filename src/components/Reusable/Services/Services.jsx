import React, { useEffect, useState } from "react";
import plumbing from "../../../assets/electricalImages/Plumbing2.png";
import carpentry from "../../../assets/electricalImages/carpentry.png";
import electronics from "../../../assets/electricalImages/electronics.png";
import electrical from "../../../assets/electricalImages/electrical.png";
import styles from "./service.module.css";


const Services = ({login}) => {
  console.log(login)
  const [dynamicClass,setDynamicClass]= useState("three-grid_reusable")
  useEffect(()=>{
    if (login) {
      setDynamicClass("four-grid_reusable")
    }
    else{
      setDynamicClass("three-grid_reusable")
    }

  },[login])
  
  const { servicesCon, black } = styles;
  return (
    <div className={login==='home'?`${servicesCon} double-grid_reusable`:` ${servicesCon} ${dynamicClass}`}>
       
      <figure>
        <img src={plumbing} alt="Plumber" />
        <figcaption>Plumbing</figcaption>
        <button type="button" className={login?black:''}> Explore</button>
      </figure>
      <figure>
        <img src={electronics} alt="Electrician" />
        <figcaption>Electronics & Gadgets</figcaption>
        <button type="button"> Explore</button>
      </figure>
      <figure>
        <img src={carpentry} alt="Carpenter" />
        <figcaption>Carpenter</figcaption>
        <button type="button" className={login?black:''}> Explore</button>
      </figure>
      {login && 
        <figure>
        <img src={electrical} alt="Electrician" />
        <figcaption>Electrical</figcaption>
        <button type="button"> Explore</button>
      </figure>
        }

    </div>
  );
};

export default Services;
