import React from 'react'

import './Notification.css'
import allBox from '../../../../assets/all_inbox.png';

const Notification = () => {
  return (
    <div className="notification">
      <div className="notification-wrapper">
        <img src={allBox} alt="" />
      </div>
    </div>
  )
}

export default Notification