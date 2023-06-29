/* eslint-disable no-unused-vars */
import React from 'react'
import {
    IoNotificationsOutline, 
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
import {AiOutlineUser, AiOutlineInbox, AiTwotoneTags} from 'react-icons/ai'

import { NavLink, Link } from 'react-router-dom';

import './Sidebar.css'
import echub from '../../../../assets/Echub Logo (1).png'



const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to="/" className="sidebar-header">
            <img src={echub} alt="" />
        </Link>
        <div className="sidebar-menu">
            <NavLink to="dashboard" className={(props) => { return `${props.isActive ? "active" : "inactive"} sidebar-menu-item` }}>
                <BsGridFill size={"1.5rem"} />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="users" className={(props) => { return `${props.isActive ? "active" : "inactive"} sidebar-menu-item` }}>
                <AiOutlineUser size={"1.5rem"} />
                <span>Users</span>
            </NavLink>
            <NavLink to="services" className={(props) => { return `${props.isActive ? "active" : "inactive"} sidebar-menu-item` }}>
                <AiTwotoneTags size={"1.5rem"} />
                <span>Services</span>
            </NavLink>
            <NavLink to="projects" className={(props) => { return `${props.isActive ? "active" : "inactive"} sidebar-menu-item` }}>
                <AiOutlineInbox size={"1.5rem"} />
                <span>Projects</span>
            </NavLink>
            <NavLink to="notification" className={(props) => { return `${props.isActive ? "active" : "inactive"} sidebar-menu-item` }}>
                <IoMdNotifications size={"1.5rem"} />
                <span>Notifications</span>
            </NavLink>
            <NavLink to="setting" className={(props) => { return `${props.isActive ? "active" : "inactive"} sidebar-menu-item` }}>
                <IoSettingsSharp size={"1.5rem"} />
                <span>Settings</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar