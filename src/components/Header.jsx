/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Echub from "../assets/Vector.png"
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import userImg from '../assets/Ellipse 52.png';
import './Header.css';

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    console.log({user})

    const navigate = useNavigate()

    return (
        <header className="header shadow">
            <div className="container">
                <div className="header-left">
                    <Link to="/" className="logo">
                        <img src={Echub} alt="" />
                    </Link>
                    <div className="menu">
                        <Link to="/about" className="menu-item">About Us</Link>
                        <Link to="" className="menu-item">Services</Link>
                        <Link to="" className="menu-item">Contact Us</Link>
                        <Link to="" className="menu-item">Blog</Link>
                        <Link to="" className="menu-item">FAQs</Link>
                    </div>
                    {isNavOpen && <div className="mobile-menu">
                        <Link to="/about" className="menu-item">About Us</Link>
                        <Link to="" className="menu-item">Services</Link>
                        <Link to="" className="menu-item">Contact Us</Link>
                        <Link to="" className="menu-item">Blog</Link>
                        <Link to="" className="menu-item">FAQs</Link>
                        {!user && <Link to="/signup" className="auth-link">Sign Up</Link>}
                        {!user && <Link to="/login" className="auth-link">Log In</Link>}

                        <div className="mobile-menu-item">About Us</div>
                        <div className="mobile-menu-item">Services</div>
                        <div className="mobile-menu-item">Contact Us</div>
                        <div className="mobile-menu-item">Blog</div>
                        <div className="mobile-menu-item">FAQs</div>
                        {!user && <Link to="/signup" className="auth-link">Sign Up</Link>}
                        {!user && <Link to="/login" className="auth-link">Log In</Link>}
                        {user && <div className="img-container">
                            <img src={userImg} alt="" />
                        </div>}
                        <button>Join the team</button>
                    </div>}
                </div>
                <div className="header-right">
                    {!user && <Link to="/signup" className="auth-link">Sign Up</Link>}
                    {!user && <Link to="/login" className="auth-link">Log In</Link>}
                    {user && 
                        (<div className="img-container">
                            <img src={userImg} alt="" />
                        </div>)
                    }
                    <button onClick={()=> navigate("join")}>Join the team</button>
                    {/* <div className="menu-icon" onClick={()=>{ 
                        setIsOpen(true);                        
                    }}>
                        <button>Join the team</button>
                    </div> */}
                    <div className="menu-icon" onClick={()=>{
                        setIsOpen(true);
                        console.log("Pop up")
                    }}>
                        <AiOutlineMenu size={35} />
                    </div>
                    <div className="mobile-menu-icon" onClick={()=>{
                        setIsNavOpen(!isNavOpen);
                        console.log("Pop up")
                    }}>
                        {!isNavOpen && <AiOutlineMenu size={35} />}
                        {isNavOpen && <span>❌</span>}
                    </div>
                </div>
            </div>
            {isOpen && <HireModal setIsOpen={setIsOpen} />}
        </header>
    )
}

function HireModal({setIsOpen}) {
    return (
        <div className="hire-modal-overlay">
            <div className="pop">
                <div className="close" onClick={()=> setIsOpen(false)}>❌</div>
                <Link to="/" className="modal-icon">
                    <img src={Echub} alt="" />
                </Link>
                <div className="hire-tech">
                    <div className="tech-header">
                        <h1>HIRE TECHNICIANS</h1>
                    </div>
                    <div className="tech-wrapper">
                        <Link to="/company" className="tech-item">For Companies</Link>
                        <Link to="/individual" className="tech-item">For Individuals</Link>
                        <Link to="" className="tech-item">For Building and Construction Projects</Link>
                    </div><br />
                    <Link to="/company" className="hire-btn">
                        <span>Hire Now</span>
                    </Link>
                </div>
                <div className="team">
                    <div className="tech-header">
                        <h1>JOIN THE TEAM</h1>
                    </div>
                    <div className="tech-wrapper">
                        <div className="tech-item">For Technicians</div>                        
                    </div><br />
                    <Link to="/join" className="hire-btn">
                        <span>Join the Team</span>
                    </Link>
                </div>
                <div className="about">
                    <Link to="/about" className="tech-header">
                        <h1>ABOUT US</h1>
                    </Link>
                    <div className="tech-wrapper">
                        <div className="tech-item">Events</div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;