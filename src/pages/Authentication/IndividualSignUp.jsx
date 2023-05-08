import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './auth.css';
import companyImg from '../../assets/Group 168.png';
import individualImg from '../../assets/Group 169.png';
import googleImg from '../../assets/sign3.png';
import echub from '../../assets/Echub Logo.png';
import echubLogo from '../../assets/Vector.png';
import { MdClose } from 'react-icons/md';
import { register } from "../../API/apiRequest.js";

const IndividualSignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [TC, setTC] = useState(false)

  

  const {pending} = useSelector((state)=> state.user)
  const dispatch = useDispatch()


  const newUserHandler = () => {
    const info = {
      fullname: name,
      email,
      phone,
      password
    }
    return register(info, dispatch)
  }
  return (
    <div className="auth">
        <div className="auth-left">
          <img src={echub} alt="" />
        </div>
        <div className="auth-right">
          <Link to="/" className="auth-close">
            <MdClose fontSize={"2rem"} color="#000" />
          </Link>
          <div className="auth-logo">
            <img src={echubLogo} alt="" />
          </div>
          <div className="auth-header">
            <h1>Create an Account</h1>
            <h3>Book a technician within minutes</h3>
          </div>
          <p className="sign-as">SignUp as:</p>
          <div className="auth-choice">
            <NavLink to="/company" className={(props) => { return `${props.isActive ? "active" : "inactive"} company-individual` }}>
              <img src={companyImg} alt="" />
              <h3>Company</h3>
            </NavLink>
            <NavLink to="/individual" className={(props) => { return `${props.isActive ? "active" : "individual-active"} company-individual` }}>
              <img src={individualImg} alt="" /> 
              <h3>Individual</h3>
            </NavLink>
          </div>
          <p className="create-with">Create an account with</p>
          <div className="auth-alternate">
            <img src={googleImg} alt=""/>
            <img src={googleImg} alt=""/>
            <img src={googleImg} alt=""/>
          </div>
          <div className="auth-form">
            <div className="auth-input">
              <label>Name</label>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="auth-input">
              <label>Email</label>
              <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="auth-input">
              <label>Phone number</label>
              <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} />
            </div>
            <div className="auth-input">
              <label>Password</label>
              <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div className="auth-agree">
              <input type="checkbox" value={TC} onChange={(e)=> setTC(e.target.value)} />
              <span>I understand that TechVillage  will process my information in accordance with their Privacy Policy. I may withdraw my consent through unsubscribe links at any time.</span>
            </div>
            <div className="auth-btn">
              <button onClick={newUserHandler}>{pending ? "wait a minute..." : "SIGN UP"}</button>
            </div>
            <div className='account'>
              <span>Already have an account.</span>
              <Link to='/login'>LOGIN</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default IndividualSignUp