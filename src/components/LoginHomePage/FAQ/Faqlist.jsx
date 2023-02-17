import React, { useState } from "react";
import{AiOutlineDown,AiOutlineUp} from 'react-icons/ai'

const Faqlist = ({ answer, question, status }) => {
  const [toggle, SetToggle] = useState(status);
  const toggleHandler=()=>{
    SetToggle(!toggle)
  }
  return (
    <div>
      <button>{question} <span onClick={toggleHandler}>{toggle?<AiOutlineDown/>:<AiOutlineUp/>}</span></button>
      {toggle  &&<p>
        {answer}
      </p>}
    </div>
  );
};

export default Faqlist;
