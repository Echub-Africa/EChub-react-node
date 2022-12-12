import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Join from "./pages/Join.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import CompanySign from "./pages/CompanySign.jsx";
import NormalSign from "./pages/NormalSign.jsx";



function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<SignUp/>}/>
      <Route path="/companySign" element={<CompanySign/>} />
      <Route path="/normalSign" element={<NormalSign/>} />
      <Route path="/join" element={<Join/>} />
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
