import React from 'react'
import Person3Icon from '@mui/icons-material/Person3';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Echub from "../assets/Echub Logo.svg"


export default function NavBar() {
  return (
    
  
    <nav className="navbar navbar-expand-lg sticky-top bg-light">

      <div className="container ">

        <a className="navbar-brand me-2" href="https://mdbgo.com/">
        <div className='brandName'>
        <h1 className='brand'>Blue collar</h1>
        <div className='logo'>
          <img
            src={Echub}
            alt="MDB Logo"
          />
          <p>by</p>

        </div>

        </div>
          
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>


        <div className="collapse navbar-collapse" id="navbarButtonsExample">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">FAQ'S</a>
            </li>
          </ul>


          <div className="d-flex align-items-center">
          <button type="button" className="btn btn-link px-3 me-2 bold">
              Sign Up
            </button>
            <button type="button" className="btn btn-link px-3 me-2 bold">
              Login
            </button>
            <button type="button" className="btn btn-primary me-3 bold">
              Join the Team
            </button>
            
          </div>
        </div>

      </div>

    </nav>
    

  )
}
