import React, { useState } from 'react';
import { Data } from '../resourcesforlandingpage/Data';
import { mobiledata } from '../resourcesforlandingpage/mobiledata';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../App.css';
import Accord from '../resourcesforlandingpage/Accord';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

 return (
 <> 
 <h1 className='topofaccord' style={{ marginTop: '30px', fontSize: '28px',}}>Frequently Asked Questions</h1>
 <div className='accordtop1'>
    <IconContext.Provider value={{ color: 'black', size: '16px' }}>
      <div className='accordionSection'>
        <div className='container'>
          {Data.map((item, index) => {
            return (
              <>
              
                <div className="wrap" onClick={() => toggle(index)} key={index} >
                  <h1>{item.question}</h1>
                  <span1>{clicked === index ? <FiMinus /> : <FiPlus />}</span1>
                </div><hr />
                {clicked === index ? (
                  <div className='dropdownn'>
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
    </div>


    <div className='accordmobile1'>
    <IconContext.Provider value={{ color: 'black', size: '16px' }}>
      <div className='accordionSection'>
        <div className='container'>
          {mobiledata.map((item, index) => {
            return (
              <>
              
                <div className="wrap" onClick={() => toggle(index)} key={index} >
                  <h1>{item.question}</h1>
                  <span1>{clicked === index ? <FiMinus /> : <FiPlus />}</span1>
                </div>
                {clicked === index ? (
                  <div className='dropdownn'>
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
    </div>
    <Accord />
    </>
  );
};

export default Accordion;