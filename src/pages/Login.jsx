import React, { useState } from "react";
import "./Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import echub from "../assets/Vector.png";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useHistory();

  return (
    <div className="login">
      <div className="login-header">
        <img src={echub} alt="" />
        <MdClose fontSize={"2.2rem"} color="#000" />
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
              <input type="email" />
            </div>
            <div className="login-input">
              <label htmlFor="">Password</label>
              <div className="input-password">
                <input type={isVisible ? "text" : "password"} />
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
                onClick={() => router.push("/auth/forgot-password")}
              >
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="login-btn">
              <button>Login</button>
            </div>
            <div className="dha">
              <span>Don't have an account?</span>
              <Link to="/auth/signup"> Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
