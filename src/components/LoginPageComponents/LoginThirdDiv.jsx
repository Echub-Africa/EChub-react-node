import "./loginPage.css"
import engineering from "../../assets/engineering.png"

export default function LoginThirdDiv() {
  return (
    <div className="thirdDiv">
      <div className="thirdDivContainer">
        <div className="row">
          <div className="col col-lg-6 col-md-6  col-sm-12">
            <div className="expertiseCard">
              <div className="expertiseCardContainer">
              <img className="expertiseImage" src={engineering} alt="expertise"/>

              </div>

            </div>


          </div>
          <div className="col col-lg-6 col-md-6  col-sm-12">

          </div>

        </div>

      </div>
    </div>
  )
}
