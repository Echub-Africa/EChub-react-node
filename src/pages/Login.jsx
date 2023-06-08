/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import echub from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../API/apiRequest';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isVisible, setIsVisible] = useState(false);

  const { pending } = useSelector((state) => state.user)
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(userInfo?.data.user.role === "admin"){
      navigate('/admin/dashboard')
    }else if(userInfo?.data.user.role === "individual" || userInfo?.data.user.role === "company"){
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
  },[userInfo, navigate])


  const loginUserHandler = () => {
    const info = {
      email,
      password
    }

    login(info, dispatch);
  }

  return (
    <div className="login">
      <div className="login-header">
        <Link to="/">
          <img src={echub} alt="" />
        </Link>
        <Link to="/">        
          <MdClose fontSize={"2.2rem"} color="#000" />
        </Link>
      </div>
      <div className="login-wrapper">
        <div className="login-card shadow">
          <div className="login-card-header">
            <h1>Welcome Back</h1>
            <h3>Login into your account</h3>
          </div>
          <div className="login-form">
            <div className="login-input">
              <label htmlFor="">Email address</label>
              <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="login-input">
              <label htmlFor="">Password</label>
              <div className="input-password">
                <input type={isVisible ? "text" : "password"} value={password} onChange={(e)=> setPassword(e.target.value)} />
                {isVisible ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setIsVisible(!isVisible)}
                    fontSize={"2rem"}
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setIsVisible(!isVisible)}
                    fontSize={"2rem"}
                  />
                )}
              </div>
            </div>
            <div className="forgot">
              <div className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div
                className="forgot-pwd"
                onClick={() => navigate("/resetpassword")}
              >
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="login-btn">
              <button onClick={loginUserHandler} disabled={pending}>{pending ? "wait a minute..." :"Login"}</button>
            </div>
            <div className="dha">
              <span>Don't have an account?</span>
              <Link to="/individual">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
