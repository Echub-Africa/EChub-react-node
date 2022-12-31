import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import CompanySign from "./pages/CompanySign.jsx";
import NormalSign from "./pages/NormalSign.jsx";
import SignUp from "./pages/SignUp.jsx";
import Join from "./pages/Join.jsx";
import LoggedIn from "./pages/LoggedIn";



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/sign" element={<SignUp />} />
        <Route path="companySign" element={<CompanySign />} />
        <Route path="normalSign" element={<NormalSign />} />
        <Route path="/join" element= {<Join />} />
        <Route path="/login" element= {<LoggedIn />} />
        
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
