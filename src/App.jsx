/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes} from "react-router-dom"

import ProtectedRoute from "./helpers/ProtectedRoute";

import './App.css';
import Home from "./pages/Home.jsx"
import NormalSign from "./pages/NormalSign.jsx";
import Login from "./pages/Login.jsx";
import Carpentry from "./pages/Carpentry/Carpentry.jsx";
import ElectricalMaintenance from './pages/ElectricalMaintainance/ElectricalMaintenance'
import HireIndividual from "./pages/HireIndividual/HireIndividual.jsx";
import HireCompany from "./pages/HireCompany/HireCompany.jsx";
import ErrorPage from "./pages/404/ErrorPage.jsx";
import AboutTech from "./pages/AboutTechVillage/AboutTech.jsx";
import Join from "./pages/Join.jsx";
import IndividualSignUp from './pages/Authentication/IndividualSignUp'
import CompanySignUp from './pages/Authentication/CompanySignUp'
import VerifyAccount from './pages/VerifyAccount/VerifyAccount'
import ResetPassword from './pages/ResetPassword.jsx'


//Client Dashboard Account
import Index from './pages/ClientDashboard/index';
import Dashboard from './pages/ClientDashboard/layouts/Dashboard/Dashboard';
import Service from './pages/ClientDashboard/layouts/Service/Service';
import Setting from './pages/ClientDashboard/layouts/Setting/Setting';
import Notification from './pages/ClientDashboard/layouts/Notification/Notification';
import Billing from './pages/ClientDashboard/layouts/Billing/Billing';

const App = () => {
  return (
    <>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<NormalSign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:userId/verifyaccount/:token" element={<VerifyAccount />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/company" element={<CompanySignUp />} />
        <Route path="/individual" element={<IndividualSignUp />} />
        <Route path="/join" element={<Join />} />
        {/* <Route path="/carpentry" element={<Carpentry />} /> */}
        <Route path="/electrical-maintenance" element={<ElectricalMaintenance />} />
        <Route path="/hire-company" element={<HireCompany />} />
        <Route path="/hire-individual" element={<HireIndividual />} />
        <Route path="/about" element={<AboutTech />} />
        <Route path="" element={<Index />}>
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route path="service" element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          } />
          <Route path="notification" element={
            <ProtectedRoute>
              <Notification />
            </ProtectedRoute>
          }/>
          <Route path="setting" element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }/>
          <Route path="billing" element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          }/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
