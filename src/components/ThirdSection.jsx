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
                                <div className='customCard card1'>
                                      <h1 className='text-center card1Header'>Electrical</h1>
                                      <button className='card1Button'>Explore <i class="fas fa-angle-right"></i></button>

                                </div>
                                <div className='customCard card2'>
                                      <h1 className='text-center card2Header'>Carpentry</h1>
                                      <button className='card2Button'>Explore <i class="fas fa-angle-right"></i></button>

                                </div>
                          </div>
                          <div className='dualCard '>
                          <div className='customCard card4'>
                                      <h1 className='text-center card1Header'>Electronics</h1>
                                      <button className='card1Button'>Explore <i class="fas fa-angle-right"></i></button>

                                </div>
                          <div className='customCard card3'>
                                      <h1 className='text-center card3Header'>Plumbing</h1>
                                      <button className='card2Button'>Explore <i class="fas fa-angle-right"></i></button>

                                </div>
                                
                                

                          </div>


                    </div>


              </div>
        </div>
  )
}
