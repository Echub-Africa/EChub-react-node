import React from 'react';
import './ErrorPage.css';
import Header from '../../components/Header.jsx';

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="error-container">
        <div className="error-content">
          <h1>404</h1>
          <div className="error-msg">
            <h2>OOPS!</h2>
            <h3>Page not found</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;