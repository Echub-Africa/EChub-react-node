import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"



import './App.css';
import CompanySign from "./pages/CompanySign.jsx";
import NormalSign from "./pages/NormalSign.jsx";
import Carpentry from "./pages/Carpentry/Carpentry.jsx";
import ElectricalMaintenance from "./components/ElectricalMaintainance/ElectricalMaintenance.jsx";



function App() {
  return (
    <>
    <ElectricalMaintenance/>
    <Router>
      <Routes>
        
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
