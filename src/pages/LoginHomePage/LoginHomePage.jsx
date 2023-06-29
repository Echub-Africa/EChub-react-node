/* eslint-disable no-unused-vars */
import React from "react";

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Services from "../../components/Reusable/Services/Services";
import Challenges from "../../components/LoginHomePage/Challenges.jsx/Challenges";
import Landing from "../../components/LoginHomePage/Landing/Landing";
import Preferences from "../../components/LoginHomePage/Preferences/Preferences";
import styling from "./loginhomepage.module.css";
import Companies from "../../components/LoginHomePage/Companies/Companies";
import Customers from "../../components/Reusable/Customers/Customers";
import Trusted from "../../components/LoginHomePage/Trusted/Trusted";
import Accordions from '../../components/Accordions'





const LoginHomePage = () => {
  const { serviceCon } = styling;
  return (
    <main>
      <Header />
      <Landing />
      <Challenges />
      <Preferences />
      <section className={serviceCon}>
        <h2>Services</h2>
        <Services login={true} />
        <article>
        <h3>
          HIRE ECHUB FOR YOUR FACILITY MAINTENANCE/MANAGEMENT AND GET 80% STRESS
          OFF YOUR SHOULDER OR WE WORK FOR FREE!!!
        </h3>

        </article>
        </section>
      <Companies />
      <Customers />
      <Trusted />
      <Accordions />
      <Footer />
    </main>
  );
};

export default LoginHomePage;
