import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import LoggedIn from "./pages/LoggedIn.jsx"
// import '~mdb-ui-kit/css/mdb.min.css';
// import * as mdb from 'mdb-ui-kit'

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
