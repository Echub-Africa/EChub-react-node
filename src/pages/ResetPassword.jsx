/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import "./ResetPassword.css";
import Header from "../components/Header";
import {publicRequest} from '../helpers/requestMethod';
import { Util } from "../helpers/util";
import Loader from "../components/Loader";

let util = new Util()

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const sendPasswordHandler = async ()=>{
    setIsLoading(true)
    try {
      const {data} = await publicRequest.post('/users/send-reset-password-link', {email})
      setIsLoading(false)
      util.Alert('success', data)
      handleClearInput()
    } catch (error) {
      setIsLoading(false)
      util.Alert('error', error.response?.data)
    }
  }

  function handleClearInput(){
    return setTimeout(() => {
      setEmail("");
    }, 5000)
  }

  
  return (
    <div className="reset">
      <Header />
      <div className="reset-wrapper">
        <div className="reset-card shadow">
          <div className="reset-card-header">
            <h1>Reset Password</h1>
            <h3>Enter your email address to get a reset link </h3>
          </div>
          <div className="reset-card-form">
            <div className="reset-input">
              <label htmlFor="">Email address</label>
              <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="reset-btn">
              <button onClick={sendPasswordHandler}>{isLoading ? <Loader loaderStyle={{width: '30px', height: '30px'}} /> : "Send link"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
