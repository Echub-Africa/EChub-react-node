/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes} from "react-router-dom"


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
import ResetPassword from './pages/ResetPassword.jsx'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<NormalSign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/company" element={<CompanySignUp />} />
        <Route path="/individual" element={<IndividualSignUp />} />
        <Route path="/join" element={<Join />} />
        {/* <Route path="/carpentry" element={<Carpentry />} /> */}
        <Route path="/electrical-maintenance" element={<ElectricalMaintenance />} />
        <Route path="/hire-company" element={<HireCompany />} />
        <Route path="/hire-individual" element={<HireIndividual />} />
        <Route path="/about" element={<AboutTech />} />
      </Routes>
    </>
  );
};

export default App;
