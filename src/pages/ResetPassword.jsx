import React from 'react'


import './ResetPassword.css'
import Header from '../components/Header'


const ResetPassword = ()=>{
    return (
        <div className="reset">
            <Header />
            <div className="reset-wrapper">
                <div className="reset-card shadow">
                    <div className="reset-card-header">
                        <h1>Reset Password</h1>
                        <h3>Enter you email address to get a reset link </h3>
                    </div>
                    <div className="reset-card-form">
                        <div className="reset-input">
                            <label htmlFor="">Email address</label>
                            <input type="email" />
                        </div>
                        <div className="reset-btn">
                            <button>Send link</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;