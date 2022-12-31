import React from 'react';

import rect1 from '../../assets/Rectangle 148.png';
import rect2 from '../../assets/Rectangle 144.png';
import rect3 from '../../assets/Rectangle 146.png';
import rect4 from '../../assets/Rectangle 143.png';
import rect5 from '../../assets/Rectangle 145.png';
import rect6 from '../../assets/Rectangle 147.png';

const Projects = () => {
  return (
    <div className="carpentry-projects">
        <div className="container">
            <div className="project-header">
                <h1>Projects</h1>
            </div>
            <div className="project-wrapper">
                <div className="project-img">                    
                    <img src={rect1} alt="" />
                </div>                
                <div className="project-img">                    
                    <img src={rect2} alt="" />
                </div>                
                <div className="project-img">                    
                    <img src={rect3} alt="" />
                </div>                
                <div className="project-img">                    
                    <img src={rect4} alt="" />
                </div>                
                <div className="project-img">                    
                    <img src={rect5} alt="" />
                </div>                
                <div className="project-img">                    
                    <img src={rect6} alt="" />
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Projects;