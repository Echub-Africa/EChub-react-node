import React, {useState} from 'react';
import Echub from "../assets/Vector.png"
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import userImg from '../assets/Ellipse 52.png';
import './Header.css';
//import HireModal from './HireModal';

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(false)

    return (
        <header className="header shadow">
            <div className="container">
                <div className="header-left">
                    <div className="logo">
                        <img src={Echub} alt="" />
                    </div>
                    <div className="menu">
                        <div className="menu-item">About Us</div>
                        <div className="menu-item">Services</div>
                        <div className="menu-item">Contact Us</div>
                        <div className="menu-item">Blog</div>
                        <div className="menu-item">FAQs</div>
                    </div>
                </div>
                <div className="header-right">
                    {!user && <Link to="/signup" className="auth-link">Sign Up</Link>}
                    {!user && <Link to="/login" className="auth-link">Log In</Link>}
                    {user && <div className="img-container">
                        <img src={userImg} alt="" />
                    </div>}
                    <button>Join the team</button>
                    <div className="menu-icon" onClick={()=>{ 
                        setIsOpen(true);
                        console.log("Pop up")
                    }}>
                        <AiOutlineMenu size={35} />                        
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
                <div className="modal-icon">
                    <img src={Echub} alt="" />
                </div>
                <div className="hire-tech">
                    <div className="tech-header">
                        <h1>HIRE TECHNICIANS</h1>
                    </div>
                    <div className="tech-wrapper">
                        <div className="tech-item">For Companies</div>
                        <div className="tech-item">For Individuals</div>
                        <div className="tech-item">For Building and Construction Projects</div>
                    </div>
                    <div className="hire-btn">
                        <span>Hire Now</span>
                    </div>
                </div>
                <div className="team">
                    <div className="tech-header">
                        <h1>JOIN THE TEAM</h1>
                    </div>
                    <div className="tech-wrapper">
                        <div className="tech-item">For Technicians</div>                        
                    </div>
                    <div className="hire-btn">
                        <span>Join the Team</span>
                    </div>
                </div>
                <div className="about">
                    <div className="tech-header">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="tech-wrapper">
                        <div className="tech-item">Events</div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;