import React, {useState} from 'react';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';


const Plan = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="carpentry-plan">
        <div className="container">
            <aside className="plan-left">
                <h1>The Carpentry Plan</h1>
            </aside>
            <aside className="plan-right">
                <div className="plan-card">
                    <h1>Carpentry Plan</h1>
                    <div className="card-wrapper">
                        <select className="">
                            <option>Items you want to fix</option>
                            <option>---</option>
                            <option>---</option>
                        </select>
                        <div className="card-range">
                            <span className="btn-primary" onClick={()=> setCount((prev)=> prev - 1)}><ArrowLeft size={30} /></span>
                            <span>{count}</span>
                            <span className="btn-primary" onClick={()=> setCount((prev)=> prev + 1)}><ArrowRight size={30} /></span>
                        </div>
                        <div className="plan-btn">
                            <span className="btn-primary">Get it done</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
  )
}

export default Plan;