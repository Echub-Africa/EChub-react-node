import React from 'react'
// import Good from '../asset/Good.png'
import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title">
        {/* <img src={Good} alt='good' height={50} width = {50} className="mx-auto"/> */}
        <h2>Login successful</h2>
      </div>
      <div className="body">
        <p>You have successfully signed into your account</p>
      </div>
      <div className="footer">
        <button><Link to='../menu' style={{'color': 'black', 'textDecoration':'none'}}>Menu</Link></button>
      </div>
    </div>
  </div>
  )
}

export default Modal