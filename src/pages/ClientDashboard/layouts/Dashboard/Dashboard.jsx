import React from 'react'
import {
    MdMoreHoriz
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import caseimg from '../../../../assets/work_history.png';
import caseimg2 from '../../../../assets/work.png'
import helpImg from '../../../../assets/Group 96.png'
import feedbackImg from '../../../../assets/Group 95.png'

const Dashboard = () => {
  return (
      <div className="dashboard">
        <div className="dashboard-wrapper">
            <div className="dashboard-analytic">
                <div className="dashboard-stats">
                    <Link to="/service" className="stat">
                        +
                    </Link>
                    <div className="stat">
                        <div className="stat-header">
                            <span>Ongoing Jobs</span>
                            <span>1</span>
                        </div>
                        <div className="stat-icon">
                            <img src={caseimg} alt="" />
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-header">
                            <span>Project Completed</span>
                            <span>4</span>
                        </div>
                        <div className="stat-icon">
                            <img src={caseimg2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="dashboard-status">
                    <div className="status-header">
                        <MdMoreHoriz size={"1.5rem"} />
                    </div>
                    <div className="status-details">
                        <p>Ongoing Project/Status</p>
                        <p>Umuerim Nekede, Owerri Imo State</p>
                    </div>
                    <div className="status-progress">
                        <div className="progress-container">
                            <progress max="100" value="50">50%</progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-service">
                <div className="dashboard-details">
                    <div className="detail-header">Details of Ongoing projects</div>
                    <div className="detail-service">
                          <div className="service">High Current  (Generator)</div>
                          <div className="service">Lighting</div>
                          <div className="service">Installation</div>
                    </div>
                </div>
                <div className="faq">
                    <div className="faq-item">
                        <img src={helpImg} alt="" />
                        <div className="faq-content">
                            <span>Ask Us</span>
                            <span>Get Help</span>
                        </div>
                    </div>
                    <div className="faq-item">
                        <img src={feedbackImg} alt="" />
                        <div className="faq-content">
                            <span>give us a feedback</span>
                            <span>Give Feedback</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard-invoice">
            <div className="invoice-container">
                Nothing to See Here
            </div>
        </div>
    </div>
  )
}

export default Dashboard