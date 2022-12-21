import "./loginPage.css"
import engineering from "../../assets/engineering.png"
import memory from "../../assets/memory.png"
import support from "../../assets/support_agent.png"
import verified from "../../assets/verified.png"
import manage from "../../assets/manage_accounts.png"
import summarize from "../../assets/summarize.png"
import check from "../../assets/checks check.svg"


export default function LoginThirdDiv() {
  return (
    <div className="thirdDiv">
      <div className="thirdDivContainer">
        <div className="row">
          <div className="col col-lg-6 col-md-6  col-sm-12">
            <div className="dualCard mb-3">
              <div className="expertiseCard">
                <div className="expertiseCardContainer">
                  <img className="expertiseImage" src={engineering} alt="expertise" />
                  <h1 className="cardItem">Vetted Technicians</h1>
                  <p className="cardP">Spend less time interviewing or trying to vet technicians and more time building results and optimization with Blue Collar.</p>

                </div>

              </div>
              <div className="expertiseCard">
                <div className="expertiseCardContainer">
                  <img className="expertiseImage" src={manage} alt="expertise" />
                  <h1 className="cardItem">Best Talent</h1>
                  <p className="cardP">Tap into a talent pool that spans multiple regions. The best technicians aren’t always in your backyard, they are at Blue Collar</p>

                </div>

              </div>

            </div>
            <div className="dualCard mb-3">
              <div className="expertiseCard">
                <div className="expertiseCardContainer">
                  <img className="expertiseImage" src={summarize} alt="expertise" />
                  <h1 className="cardItem">Maintenance report & audit</h1>
                  <p className="cardP">ou get reports on every maintenance carried out with expenses, consultations and suggestions to aid in the technical maintenance. Here, technicians cannot cheat or overcharge or underperform or even try to smuggle you.</p>

                </div>

              </div>
              <div className="expertiseCard">
                <div className="expertiseCardContainer">
                  <img className="expertiseImage" src={verified} alt="expertise" />
                  <h1 className="cardItem">The Best Offer</h1>
                  <p className="cardP"> We are ready to offer you a 10% reduction in price of your cheapest technicians with more improved service at that. (T &C applies)</p>

                </div>

              </div>

            </div>
            <div className="dualCard">
              <div className="expertiseCard">
                <div className="expertiseCardContainer">
                  <img className="expertiseImage" src={memory} alt="expertise" />
                  <h1 className="cardItem">IoT& Smart home devices to 
top recurring clients</h1>
                  <p className="cardP">Our top performing clients are handsomely rewarded with points which can be converted into various offers and rewards</p>

                </div>

              </div>
              <div className="expertiseCard">
                <div className="expertiseCardContainer">
                  <img className="expertiseImage" src={support} alt="expertise" />
                  <h1 className="cardItem">Hands-On Support</h1>
                  <p className="cardP">From helping with on boarding to execution to sharing best practices, our success team is there every step of the way with 24hrs customer emergency support & Help Desk</p>

                </div>

              </div>

            </div>




          </div>
          <div className="col col-lg-6 col-md-6  col-sm-12 rightSection">
          <div className="thirdDivRight">
          <h1 className="mb-4 "> Why top companies prefers Blue Collars’ talents</h1>
                          <div className='paragraph mb-4'>
                                <img src={check} alt="check" />
                                <p className='para'>We train and equip our artisans</p>

                          </div>
                          <div className='paragraph mb-4'>
                                <img src={check} alt="check" />
                                <p className='para'>Full immediate follow up reports and audit</p>

                          </div>
                          <div className='paragraph mb-4'>
                                <img src={check} alt="check" />
                                <p className='para'>IoT& Smart home devices to top recurring clients</p>

                          </div>
                          <div className='paragraph mb-4'>
                                <img src={check} alt="check" />
                                <p className='para'>24Hrs customer emergency support & Help Desk</p>

                          </div>
                          <div className='paragraph mb-3'>
                                <img src={check} alt="check" />
                                <p className='para'>95% job success rate </p>

                          </div>

          </div>

          </div>

        </div>

      </div>
    </div>
  )
}
