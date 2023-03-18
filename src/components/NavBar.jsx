// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { useState } from 'react'

// import Echub from "../assets/Vector.png"



// export default function NavBar({user}) {
//   //const [user,setUser]= useState({name:"frank"})
//   return (
    
  
//     <nav className="navbar navbar-expand-lg sticky-top bg-light  ">
//       <div className="container">
//         <a className="navbar-brand me-2" href="#">
//           <div className='brandName'>
//           <img
//               src={Echub}
//               alt="MDB Logo"
//           />
//           </div> 
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-mdb-toggle="collapse"
//           data-mdb-target="#navbarButtonsExample"
//           aria-controls="navbarButtonsExample"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fas fa-bars"></i>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarButtonsExample">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" href="">About Us</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" href="#">Services</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" href="#">Contact Us</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" href="#">Blog</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" href="#">FAQ'S</a>
//             </li>
//           </ul>
//           <div className="d-flex align-items-center">
//           { user ? <ul class="navbar-nav me-4">
  
//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle active"
//           href="#"
//           id="navbarDropdownMenuLink"
//           role="button"
//           data-mdb-toggle="dropdown"
//           aria-expanded="false"
//         >
//           {user.name}
//         </a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <li>
//             <a class="dropdown-item active" href="#">Logout</a>
//           </li>
//           <li>
//             <a class="dropdown-item active" href="#">Account settings</a>
//           </li>
//           <li>
//             <a class="dropdown-item active" href="#">view profile</a>
//           </li>
//         </ul>
//       </li>
//     </ul>
//     :
//           <ul className="navbar-nav  mb-2 mb-lg-0">
//             <button type="button" className="btn btn-link px-3 me-2 bold">
//                   Sign Up
//             </button>
//             <button type="button" className="btn btn-link px-3 me-2 bold">
//                   Login
//             </button>
//             <button type="button" style={styles} className="btn-primary me-3 bold">
//                   Join the Team
//             </button>
//           </ul>
//           }
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// const styles = {
//   borderRadius: "10px",
//   color: "#fff",
//   background: "#085BDA",
//   border: "none",
//   padding: "12px 20px"
// }