/* eslint-disable no-unused-vars */
import React from "react";
import HowItWorks from "../../components/Reusable/HowItWorks/HowItWorks";
import styles from "./electrical.module.css";
import img1 from "../../assets/electricalImages/img1.png";
import img2 from "../../assets/electricalImages/img2.png";
import img3 from "../../assets/electricalImages/img3.png";
import img4 from "../../assets/electricalImages/img4.png";
import img5 from "../../assets/electricalImages/img5.png";
import img6 from "../../assets/electricalImages/img6.png";
import starrate from "../../assets/electricalImages/star_rate.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Services from "../../components/Reusable/Services/Services";
import Customers from "../../components/Reusable/Customers/Customers";


const ElectricalMaintenance = () => {
  const { Container, Landing, projects, customers,underline } = styles;
  return (
    <>
      <main className={Container}>
        <Header />
        <section className={Landing}>
          <div>
            <h5>Switch to Competence</h5>
            <h1>Fix all damaged unit, get certified artisans within minutes</h1>
            <ul>
              <li>Power issues</li>
              <li>installation and wiring </li>
              <li>Repairs and replacment</li>
              <li>Lighting and metering issues </li>
            </ul>
            <button type="button">I want a technician now </button>
          </div>
        </section>
        <HowItWorks />
        <section className={projects}>
          <h2>Projects</h2>
          <div className="three-grid_reusable">
            <article>
              <img src={img1} alt="" />
            </article>
            <article>
              <img src={img2} alt="" />
            </article>
            <article>
              <img src={img3} alt="" />
            </article>
            <article>
              <img src={img4} alt="" />
            </article>
            <article>
              <img src={img5} alt="" />
            </article>
            <article>
              <img src={img6} alt="" />
            </article>
          </div>
          <Customers/>
        
        </section>
        <section>
        <h2 className={underline}>Our other Services </h2>
        <Services />

        </section>
        
      </main>
      <Footer />
    </>
  );
};

export default ElectricalMaintenance;
