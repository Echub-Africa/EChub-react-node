import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from './redux/app/store'
import "notyf/notyf.min.css";
import 'react-confirm-alert/src/react-confirm-alert.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>        
        <App />        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
