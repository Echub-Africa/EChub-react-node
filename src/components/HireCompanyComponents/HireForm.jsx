import React from 'react';


const HireForm = () =>{
    return (
        <div className="hire">
            <div className="hire-left">
                <div className="hire-left-container container">
                    <h1>HERE IS HOW TECH VILLAGE CAN HELP YOU TODAY </h1>
                    <p>After filling the form out, we will send you a mail to scheduel a date to inspect and weigh cost</p>
                    <p>Call out fee ranges form N500 - N1000</p>
                </div>
            </div>
            <div className="hire-right">
                <div className="hire-form">
                    <div className="input-group">
                        <div className="input-form">
                            <label>Work mail</label>
                            <input type="email" required />
                        </div>
                        <div className="input-form">
                            <label>Phone number</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-form">
                            <label>First Name</label>
                            <input type="text" required />
                        </div>
                        <div className="input-form">
                            <label>Last Name</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-form">
                            <label>Company Name</label>
                            <input type="text" required />
                        </div>
                        <div className="input-form">
                            <label>Job Title</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-form">
                            <label>Your Current Role</label>
                            <select>
                                <option>-- Role --</option>
                                <option>Software Developer</option>
                                <option>Reactjs Developer</option>
                                <option>Backend Developer</option>
                            </select>
                        </div>
                        <div className="input-form">
                            <label>Employee Range</label>
                            <select>
                                <option>-- Range --</option>
                                <option>50 - 150</option>
                                <option>50 - 150</option>
                                <option>50 - 150</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-form">
                            <label>Country</label>
                            <input type="text" required />
                        </div>
                        <div className="input-form">
                            <label>State</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="input-form">
                        <label>Message</label>
                        <textarea row="10" col="20"></textarea>
                    </div>
                    <div className="form-policy">
                        <input type="checkbox" />
                        <div>I understand that TechVillage  will process my information in accordance with their <strong>Privacy Policy</strong>. I may withdraw my consent through unsubscribe links at any time.</div>
                    </div>
                    <div className="form-btn">
                        <span>Fix now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireForm;