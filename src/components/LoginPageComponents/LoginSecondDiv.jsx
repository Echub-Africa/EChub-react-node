import check from "../../assets/checks check.svg"
import "./loginPage.css"



export default function LoginSecondDiv() {
  return (
        <div className="loginSecondDiv">
              <div className="secondDivContainer">
                    <div className="row">
                          <div className="col col-lg-6 col-md-6 col-sm-12 facing">
                          <h1> Are you presently facing these challenges</h1>
                          <div className='paragraph mb-3'>
                                <img src={check} alt="check" />
                                <p className='para'>constant troubles with quack</p>

                          </div>
                          <div className='paragraph mb-3'>
                                <img src={check} alt="check" />
                                <p className='para'>Distractions from core business areas due to frequent facility management issues</p>

                          </div>
                          <div className='paragraph mb-3'>
                                <img src={check} alt="check" />
                                <p className='para'>Unexplained costs that lead to lack of transparency</p>

                          </div>
                          <div className='paragraph mb-3'>
                                <img src={check} alt="check" />
                                <p className='para'>Difficulty in tracking your maintenance requests leading to a long time on closing maintenance requests</p>

                          </div>
                          <button type="button" class="btn btn-primary firstButton">SWITCH TO COMPETENCE <i class="fas fa-angle-right"></i></button>
                          



                          </div>
                          <div className="col col-lg-6 col-md-6 col-sm-12 frame">
                          <iframe  width="300" height="200" src="https://www.youtube.com/embed/1lJ6_HE4Dnw" title="YouTube video player" frameborder="0" allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>

                    </div>

              </div>
        </div>
  )
}
