/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {MdKeyboardVoice, MdOutlineMilitaryTech} from 'react-icons/md'
import './Header.css'
import {IoNotificationsOutline } from 'react-icons/io5';
import { GrSearch } from 'react-icons/gr';
import profile from "../../../../assets/profile.png";

const Header = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const navigate = useNavigate();

    const userLoginHandler = () => {
        localStorage.removeItem('userInfo');
        setIsDropdown(false);
        navigate('/login');
    }

  return (
    <div className="header-container">
        <div className="header-left">
            <div className="input-wrapper">
                <GrSearch size={"1.5rem"} />
                <input type="text" placeholder="Search..." />
                <MdKeyboardVoice size={"1.5rem"} />
            </div>
        </div>
        <div className="header-right">
            <div className="header-right-icon">
                <MdOutlineMilitaryTech size={"1.5rem"} />
            </div>
            <div className="header-right-icon">
                <IoNotificationsOutline size={"2rem"} alt="" />
            </div>
            <div className="header-right-icon">
                <img onClick={()=> setIsDropdown(!isDropdown)} src={profile} alt="" />
                { isDropdown && <div className="dashboard-dropdown">
                    <span>
                        <Link to="setting">Profile</Link>
                    </span>
                    <span onClick={userLoginHandler}>Logout</span>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Header