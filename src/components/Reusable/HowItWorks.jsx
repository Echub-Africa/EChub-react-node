import React from "react";
import styles from "./works.module.css";
import inspection from '../../assets/electricalImages/inspection.png'
import proposal from '../../assets/electricalImages/proposal.png'
import execution from '../../assets/electricalImages/execution.png'

const HowItWorks = () => {
  const { timeline,container,content,workContainer,up } = styles;
  return (
    <section className={workContainer}>
      <h2>How it Works</h2>
      <div className={timeline}>
        <div className={container}>
          <div className={content}>
            <h2>Inspection</h2>
            <p>Inspection is necessary for careful evaluation. The primary objective of inspections is meeting clients' requirements and making sure that complaints were well filed and there is no other presumable fault.</p>
          </div>
          <div>
            <img src={inspection} alt="people inspecting a meter" className={up} />
          </div>
        </div>
        <div className={container}>
          <div className={content}>
            <h2>Proposal</h2>
            <p>After inspection, a proposal is sent which will include details of the inspection, bills, and proposed date of execution. It is to be signed by both client and project technician</p>
          </div>
          <div>
            <img src={proposal} alt="people inspecting a meter" /></div>
        </div>
        <div className={container}>
          <div className={content}>
            <h2>Execution</h2>
            <p>On agreement with the proposal and after due payments, our top talents are explored, which is top service execution. Technicians now carry out their jobs after which receipt is issued</p>
            <button type="button">I want it fixed now</button>
          </div>
          <div>
          <img src={execution} alt="people inspecting a meter" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
