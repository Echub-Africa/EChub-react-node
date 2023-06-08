/* eslint-disable no-unused-vars */
import React from 'react';
import {MdClose} from 'react-icons/md';


import './Modal.css'

const Modal = ({setIsOpen}) => {
  return (
    <div className="modal-wrapper">
        <div className="modal-close">
            <MdClose fontSize={"2rem"} color={"red"} />
        </div>
        <h3>Add New User</h3>
        <form className="form-wrapper">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Phone number" />
            <div className="form-role">
                <select>
                  <option>-- role --</option>
                  <option>Individual</option>
                  <option>Company</option>                  
                </select>
            </div>
            <label htmlFor="pic-upload" className="upload-wrapper">
                <input type="file" id="pic-upload" style={{display: "none"}} />
                <div className="">
                    Click here to Upload
                </div>
            </label>
            <span>Submit</span>
        </form>
    </div>
  )
}

export default Modal