import React, { useState } from 'react';
import { Data1 } from './Data1';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../App.css'

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
 <div className='accordtop'>
    <IconContext.Provider value={{ color: 'black', size: '16px' }}>
      <div className='accordionSection'>
        <div className='container'>
        <h1 style={{marginTop: '-250px', fontSize: '20px', textAlign: 'center'}}></h1>
          {Data1.map((item, index) => {
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
    </>
  );
};

export default Accordion;