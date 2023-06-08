/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


import './auth.css'
import companyImg from '../../assets/Group 168.png'
import individualImg from '../../assets/Group 169.png'
import googleImg from '../../assets/sign3.png'
import echubLogo from '../../assets/Vector.png'
import {MdClose} from 'react-icons/md'
import echub from '../../assets/Echub Logo.png'
import { register } from "../../API/apiRequest.js";
import Loader from '../../components/Loader';



const CompanySignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState("")  
  const [isChecked, setIsChecked] = useState(false);

  

  const {pending} = useSelector((state)=> state.user)
  const dispatch = useDispatch()


  const newUserHandler = () => {
    const info = {
      fullname: name,
      email,
      phone,
      password,
      isAdmin: "company"
    }
    register(info, dispatch)

    handleClearInput()
  }

  function handleClearInput(){
    return setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    }, 5000)
  }

  
  

  return (
    <div className="auth">
        <div className="auth-left individual">
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
            <NavLink to="/individual" className={(props) => { return `${props.isActive ? "active" : "inactive"} company-individual` }}>
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
              <label>Company Name</label>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="auth-input">
              <label>Company Email</label>
              <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
            </div>
            <div className="auth-input-wrapper">
              {/* <div className="auth-input">
                <label>Contact Email</label>
                <input type="email" />
              </div> */}
              <div className="auth-input">
                <label>Contact Phone Number</label>
                <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" />
              </div>
            </div>
            <div className="auth-input-wrapper">
              <div className="auth-input">
                <label>Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" />
              </div>              
            </div>
            <div className="auth-agree">
              <input type="checkbox" onChange={()=> setIsChecked((checked)=> !checked)} />
              <div>I understand that TechVillage  will process my information in accordance with their <strong>Privacy Policy</strong>. I may withdraw my consent through unsubscribe links at any time.</div>
            </div>
            <div className="auth-btn">
              <button onClick={()=> isChecked && newUserHandler()} className={isChecked === true ? "" : "auth-button"}>
                {pending ? <Loader loaderStyle={{width: "20px", height: "20px", marginLeft: ".5rem", marginRight: ".5rem"}} /> : "SIGN UP"}
              </button>
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

export default CompanySignUp