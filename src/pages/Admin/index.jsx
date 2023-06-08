import React from 'react';
import {Outlet} from 'react-router-dom';

import './index.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


const index = () => {
  return (
    <div className="layout">
        <Sidebar />
        <main className="main-layout">
            <Header />
            <Outlet />
        </main>
    </div>
  )
}

export default index