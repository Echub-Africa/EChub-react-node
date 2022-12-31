import React from 'react';

import craft from '../../assets/craft man 1.png';

const Carpenter = () => {
  return (
    <div className="carpentry-container">
      <div className="container-wrapper">
        <aside className="left-side">
          <h1>Carpentry</h1>
          <div className="carpentry-timeline">
            <div className="timeline-right">
              <div className="timeline-content">
                <h3>Inspection</h3>
                <p>Inspection is necessary for careful evaluation. The primary objective of inspections is meeting clients' requirements and making sure that complaints were well filed and there is no other presumable fault.</p>
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-content">
                <h3>Proposal</h3>
                <p>After inspection, a proposal is sent which will include details of the inspection, bills, and proposed date of execution. It is to be signed by both client and project technician</p>
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-content">
                <h3>Execution</h3>
                <p>On agreement with the proposal and after due payments, our top talents are explored, which is top service execution. Technicians now carry out their jobs after which receipt is issued</p>
              </div>
            </div>
          </div>
        </aside>
        <aside className="right-side">
          <div className="right-img-1">
            <img src={craft} alt="" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Carpenter;