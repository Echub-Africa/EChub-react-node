import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';



function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<SignUp/>}/>
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
