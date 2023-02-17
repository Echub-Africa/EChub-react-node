import React from 'react'
import logo from '../../../assets/clientImages/Echub_logo.png'
import styling from './clientoverview.module.css'

const ClientsDashBoardOverview = () => {
    const{Container}= styling
  return (
    <aside className={Container}>
        <header>
            <img src={logo} alt="echub" />
            <nav>
                <ul>
                    <li><a href="#dashboard">DashBoard</a></li>
                    <li><a href="#dashboard">Notifications</a></li>
                    <li><a href="#dashboard">Settings</a></li>
                    <li><a href="#dashboard">Billing</a></li>
                </ul>
            </nav>
        </header>
    </aside>
  )
}

export default ClientsDashBoardOverview