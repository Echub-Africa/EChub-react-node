import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CompanySign from "./pages/CompanySign.jsx";
import NormalSign from "./pages/NormalSign.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Carpentry from "./pages/Carpentry/Carpentry.jsx";
import HireIndividual from "./pages/HireIndividual/HireIndividual.jsx";
import HireCompany from "./pages/HireCompany/HireCompany.jsx";
import ErrorPage from "./pages/404/ErrorPage.jsx";
import AboutTech from "./pages/AboutTechVillage/AboutTech.jsx";
import Join from "./pages/Join.jsx";
import IndividualSignUp from "./pages/Authentication/IndividualSignUp";
import CompanySignUp from "./pages/Authentication/CompanySignUp";
import ResetPassword from "./pages/ResetPassword.jsx";
import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <main>
        <MainRoutes />
      </main>
      {/*<CompanySignUp />*/}
    </>
  );
};

export default App;
