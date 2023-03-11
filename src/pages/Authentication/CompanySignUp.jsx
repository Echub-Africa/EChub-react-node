import React from 'react';
import {Link} from 'react-router-dom'
import './auth.css'
import companyImg from '../../assets/Group 168.png'
import individualImg from '../../assets/Group 169.png'
import googleImg from '../../assets/sign3.png'
import echubLogo from '../../assets/Vector.png'
import {MdClose} from 'react-icons/md'
import echub from '../../assets/Echub Logo.png'

const CompanySignUp = () => {
  return (
    <div className="auth">
        <div className="auth-left individual">
          <img src={echub} alt="" />
        </div>
        <div className="auth-right">
          {/*<Link to="/" className="auth-close">*/}
          {/*  <MdClose fontSize={"2rem"} color="#000" />*/}
          {/*</Link>*/}
          <div className="auth-logo">
            <img src={echubLogo} alt="" />
          </div>
          <div className="auth-header">
            <h1>Create an Account</h1>
            <h3>Book a technician within minutes</h3>
          </div>
          <p className="sign-as">SignUp as:</p>
          <div className="auth-choice">
            {/*<Link to="/company" className="company-individual">*/}
            {/*  <img src={companyImg} alt="" />*/}
            {/*  <h3>Company</h3>*/}
            {/*</Link>*/}
            {/*<Link to="/individual" className="company-individual">*/}
            {/*  <img src={individualImg} alt="" /> */}
            {/*  <h3>Individual</h3>*/}
            {/*</Link>*/}
          </div>
          <p className="create-with">Create an account with</p>
          <div className="auth-alternate">
            <img src={googleImg} alt=""/>
            <img src={googleImg} alt=""/>
            <img src={googleImg} alt=""/>
          </div>
          <div className="auth-form">
            <div className="auth-input">
              <label>Company Name</label>
              <input type="text" />
            </div>
            <div className="auth-input">
              <label>Company Email</label>
              <input type="email" />
            </div>
            <div className="auth-input-wrapper">
              <div className="auth-input">
                <label>Contact Email</label>
                <input type="email" />
              </div>
              <div className="auth-input">
                <label>Contact Phone Number</label>
                <input type="email" />
              </div>
            </div>
            <div className="auth-input-wrapper">
              <div className="auth-input">
                <label>Company Address</label>
                <input type="text" />
              </div>
              <div className="auth-input">
                <label>Country</label>
                <select>
                  <option>-- Country --</option>
                  <option>Nigeria</option>
                </select>
              </div>
            </div>
            <div className="auth-agree">
              <input type="checkbox" />
              <span>I understand that TechVillage  will process my information in accordance with their Privacy Policy. I may withdraw my consent through unsubscribe links at any time.</span>
            </div>
            <div className="auth-btn">
              <button>SIGN UP</button>
            </div>
            <div className='account'>
              <span>Already have an account.</span>
              {/*<Link to='/login'>LOGIN</Link>*/}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CompanySignUp