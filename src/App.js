import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


import './App.css';
import Home from "./pages/Home.jsx"
import CompanySign from "./pages/CompanySign.jsx";
import NormalSign from "./pages/NormalSign.jsx";
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Carpentry from "./pages/Carpentry/Carpentry.jsx";
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
    <Router>
      <Routes>
        
      </Routes>
    </Router>
    </>
  )
}

export default App