import React from "react";
import plumbing from "../../../assets/electricalImages/Plumbing2.png";
import carpentry from "../../../assets/electricalImages/carpentry.png";
import electronics from "../../../assets/electricalImages/electronics.png";
import electrical from "../../../assets/electricalImages/electrical.png";
import styles from "./service.module.css";

const Services = ({login}) => {
  const { servicesCon, black } = styles;
  return (
    <div className={login?`four-grid_reusable ${servicesCon}`:`three-grid_reusable ${servicesCon}`}>
       
      <figure>
        <img src={plumbing} alt="" />
        <figcaption>Plumbing</figcaption>
        <button type="button" className={login?black:''}> Explore</button>
      </figure>
      <figure>
        <img src={electronics} alt="" />
        <figcaption>Electronics & Gadgets</figcaption>
        <button type="button"> Explore</button>
      </figure>
      <figure>
        <img src={carpentry} alt="" />
        <figcaption>Carpenter</figcaption>
        <button type="button" className={login?black:''}> Explore</button>
      </figure>
      {login && 
        <figure>
        <img src={electrical} alt="" />
        <figcaption>Electrical</figcaption>
        <button type="button"> Explore</button>
      </figure>
        }

    </div>
  );
};

export default Services;
