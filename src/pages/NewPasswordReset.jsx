import React, {useEffect, useState} from 'react';
import './NewPasswordReset.css';
import Header from "../components/Header";
import { Link, useParams } from 'react-router-dom';
import {publicRequest} from '../helpers/requestMethod';
import { Util } from "../helpers/util";
import Loader from "../components/Loader";


let util = new Util()

const NewPasswordReset = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validUrl, setValidUrl] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const params = useParams()


    useEffect(()=>{
        const verifyUrl = async ()=>{
            setIsLoading(true);
            try {
                await publicRequest.get(`/users/verify-password-link/${params.id}/${params.token}`)
                setIsLoading(false);
                setValidUrl(true)
            } catch (error) {
                util.Alert('error', error.response?.data)
                setIsLoading(false);
                setValidUrl(false)
            }
        }

        verifyUrl()
    }, [params])



    const passwordResetHandler = async ()=>{
        if(password !== confirmPassword) util.Alert("error", "Password don't match")
        setIsLoading(true);
        try {
            const {data} = await publicRequest.post(`/users/reset-password/${params.id}/${params.token}`, {password})
            setIsLoading(false)
            util.Alert('success', data)
            handleClearInput();
        } catch (error) {
            setIsLoading(false)
            util.Alert('error', error.response?.data)            
        }
    }

    function handleClearInput(){
        return setTimeout(() => {
          setPassword("");
          setConfirmPassword("");
        }, 5000)
      }

    const handleFocus = () => {
        setVisible(true);
    };
    
    const handleBlur = () => {
        setVisible(false);
    };

  return (
    <div className="new-password">
        <Header />
        <div className="new-password-wrapper">
            <>
                {validUrl ? (
                    <div className="new-password-form">
                        <h3>Create New Password</h3>
                        <p>Enter your new password to reset old password</p>
                        <div className="password-form">
                            <div className="password-input">
                                <input required type={visible ? "text" : "password"} onFocus={handleFocus} onBlur={handleBlur} value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="New Password" />
                            </div>
                            <div className="password-input">                        
                                <input required type={visible ? "text" : "password"} value={confirmPassword} onFocus={handleFocus} onBlur={handleBlur} onChange={(e)=> setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                            </div>
                            <div className="password-btn">
                                <button onClick={passwordResetHandler}>Submit</button>
                            </div>
                            <Link className='go-to-login' to="/login">
                                <p>Continue to Login</p>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        {isLoading ? (<Loader loaderStyle={{width: '50px', height: '50px'}} />) : (
                            <div className="not-valid">
                                <h3>Password Reset Link has expired</h3>
                                <Link to="/login" className="login">Continue to Login!</Link>
                            </div>
                        )}
                    </>
                )}
            </>
        </div>
    </div>
  )
}

export default NewPasswordReset