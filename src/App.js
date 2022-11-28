import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"

import './App.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
