import React from 'react'


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="nav-link brand hvr-wobble-vertical" href="#">TechVillage</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Contact Us</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link active" href="#">FAQS</a>
          </li>
        </ul>
        <form className="d-flex navForm" role="search">
        <input className='navInput' type="text" placeholder='search'/>
        <button className='navButton'>search</button>
       
          
        </form>
      </div>
    </div>
  </nav>
  )
}
