/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {MdKeyboardVoice, MdOutlineMilitaryTech, MdClose} from 'react-icons/md'
import {IoNotificationsOutline } from 'react-icons/io5';
import { GrSearch } from 'react-icons/gr';
import { AiOutlineMenu } from 'react-icons/ai';
import {    
    IoMdNotifications,
    IoSettingsOutline,    
    IoMdWallet
} from 'react-icons/io'
import {
    IoSettingsSharp,
} from 'react-icons/io5'
import {
    MdOutlineAccountBalanceWallet
} from 'react-icons/md'
import {
    BsGridFill,
    BsGrid
} from 'react-icons/bs'
import {AiOutlineInbox} from 'react-icons/ai'

import './Header.css'
import profile from "../../../../assets/profile.png";
import {logoutHandler} from '../../../../API/apiRequest';


const Header = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userLogoutHandler = () => {
        logoutHandler(dispatch)
        setIsDropdown(false);
        navigate('/login');
    }


  return (
    <div className="header-container">
        <div className="header-left">
            <div className="sidebar-icon">
                {isSidebar && <MobSidebar userLogoutHandler={userLogoutHandler} setIsSidebar={setIsSidebar} />}
                <AiOutlineMenu onClick={()=> setIsSidebar(!isSidebar)} fontSize={"2rem"} />
            </div>
            
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
                    <span onClick={userLogoutHandler}>Logout</span>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Header



function MobSidebar({setIsSidebar, userLogoutHandler}){
    return(
        <div className="mob-sidebar slide-right">
            <div className="mob-header">
                <MdClose onClick={()=> setIsSidebar(false)} fontSize={"2rem"} />
            </div>
            <div className="mob-menu">
                <NavLink onClick={()=> setIsSidebar(false)} to="dashboard" className={(props) => { return `${props.isActive ? "active" : "inactive"} mob-menu-item` }}>
                    <BsGridFill size={"1.5rem"} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink onClick={()=> setIsSidebar(false)} to="user-projects" className={(props) => { return `${props.isActive ? "active" : "inactive"} mob-menu-item` }}>
                    <AiOutlineInbox size={"1.5rem"} />
                    <span>Projects</span>
                </NavLink>
                <NavLink onClick={()=> setIsSidebar(false)} to="notification" className={(props) => { return `${props.isActive ? "active" : "inactive"} mob-menu-item` }}>
                    <IoMdNotifications size={"1.5rem"} />
                    <span>Notifications</span>
                </NavLink>
                <NavLink onClick={()=> setIsSidebar(false)} to="setting" className={(props) => { return `${props.isActive ? "active" : "inactive"} mob-menu-item` }}>
                    <IoSettingsSharp size={"1.5rem"} />
                    <span>Settings</span>
                </NavLink>
                <NavLink onClick={()=> setIsSidebar(false)} to="billing" className={(props) => { return `${props.isActive ? "active" : "inactive"} mob-menu-item` }}>
                    <IoMdWallet size={"1.5rem"} />
                    <span>Billing</span>
                </NavLink>
            </div>
            <div className="mob-logout">
                <span onClick={userLogoutHandler}>Sign Out</span>
            </div>
        </div>
    )
}