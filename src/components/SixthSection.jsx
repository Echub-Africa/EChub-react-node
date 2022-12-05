import React from 'react'
import man from "../assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg"

export default function SixthSection() {
  return (
    <div className='sixthSection' >
      <div className='row '>
        <div className='col col-lg-4 col-sm-12 col-md-4 cardRow mb-4'>
          <div className="card  testimonyCard ">
            <div className="card-body testimony-card" data-aos="flip-left">
              <img className='man' src={man} alt="man" />
              <div className='cardText'>
                <h1 className='text-center jeffrey'> Mr Jeffery</h1>
                <p className='text-center jeffrey'>Manager</p>
                <p className='text-center jeffrey'>⭐⭐⭐⭐⭐</p>

              </div>
              <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
    </div>



          </div>
          <div className='col col-lg-4 col-sm-12 col-md-4 cardRow mb-4'>
            <div className="card  testimonyCard " data-aos="flip-left">
              <div className="card-body testimony-card">
                <img className='man' src={man} alt="man" />
                <div className='cardText'>
                  <h1 className='text-center jeffrey'> Mr Jeffery</h1>
                  <p className='text-center jeffrey'>Manager</p>
                  <p className='text-center jeffrey'>⭐⭐⭐⭐⭐</p>

                </div>
                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              </div>

            </div>
      </div>

            <div className='col col-lg-4 col-sm-12 col-md-4 cardRow mb-4'>
              <div className="card  testimonyCard " data-aos="flip-left">
                <div className="card-body testimony-card">
                  <img className='man' src={man} alt="man" />
                  <div className='cardText'>
                    <h1 className='text-center jeffrey'> Mr Jeffery</h1>
                    <p className='text-center jeffrey'>Manager</p>
                    <p className='text-center jeffrey'>⭐⭐⭐⭐⭐</p>

                  </div>
                  <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>

              </div>

            </div>

          </div>

        </div>

  )
}
