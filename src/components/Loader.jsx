import React from 'react';
import '../index.css';



const Loader = ({loaderStyle}) => {
    return (
        <div className="loader-container">
            <div className="spinner" style={{...loaderStyle}}></div>
        </div>
    )
}


export default Loader;