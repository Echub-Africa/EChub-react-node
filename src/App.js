import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"


import './App.css';
import CompanySign from "./pages/CompanySign.jsx";
import NormalSign from "./pages/NormalSign.jsx";
import Carpentry from "./pages/Carpentry/Carpentry.jsx";
import HireIndividual from "./pages/HireIndividual/HireIndividual.jsx";
import HireCompany from "./pages/HireCompany/HireCompany.jsx";
import ErrorPage from "./pages/404/ErrorPage.jsx";
import AboutTech from "./pages/AboutTechVillage/AboutTech.jsx";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AboutTech />} />
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
