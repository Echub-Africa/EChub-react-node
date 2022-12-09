import React from 'react'

export default function ThirdSection() {
  return (
        <div className='thirdSection'>

              <div className='row'>
                    <div className='col col-lg-6 col-md-12 col-sm-12 third'>
                          <h1 >What do we do ?</h1>
                          <ul>
                                <li className='bold'>Tech bro's :repair and maintain work tools ,starting from #3,000 </li>
                                <li className='bold'>Homeowners: keep your properties and appliances in excellent
                                      condition with scheduled maintenance and repairs</li>
                                <li className='bold'>Startups: Maintain output & amazing outlook of your
                                      workspace with minimal cost</li>
                                <li className='bold'>Contractors: Hire competence you can always depend on</li>
                                <li className='bold'>Industrial & Commercial Stakeholders: manage properties to
                                      prevent costly repairs due to wear and tear and general
                                      deferred maintenance</li>
                          </ul>

                    </div>
                    <div className='col col-lg-6 col-md-12 col-sm-12 cardDiv mt-4 mb-4'>
                    <div className='dualCard'>
                    <div className="card card1 cardExplore" >
                                <div className="card-body body">
                                      <h5 className="card-title text-center card1title">Electrical</h5>
                                      <p className="card-text"></p>
                                      <button type="button" className="btn btn-primary cardButton">Explore <i className="fas fa-long-arrow-alt-right"></i></button>
                                </div>
                          </div>
                          <div className="card card2 cardExplore " >
                                <div className="card-body body">
                                      <h5 className="card-title text-center card2title">Carpentry</h5>
                                      <p className="card-text"></p>
                                      <button type="button" className="btn btn-primary cardButton card2button">Explore <i className="fas fa-long-arrow-alt-right"></i></button>
                                </div>
                          </div>

                    </div>
                    <div className='dualCard '>
                    <div className="card card3 cardExplore " >
                                <div className="card-body body">
                                      <h5 className="card-title text-center card3title">Plumbing</h5>
                                      <p className="card-text"></p>
                                      <button type="button" className="btn btn-primary cardButton card3button">Explore<i className="fas fa-long-arrow-alt-right"></i></button>
                                </div>
                          </div>
                          <div className="card card4 cardExplore ">
                                <div className="card-body body">
                                      <h5 className="card-title text-center card4title">Electronics and gadgets</h5>
                                      <p className="card-text"></p>
                                      <button type="button" className="btn btn-primary cardButton">Explore <i className="fas fa-long-arrow-alt-right"></i></button>
                                </div>
                          </div>

                    </div>
                          

                    </div>


              </div>
        </div>
  )
}
