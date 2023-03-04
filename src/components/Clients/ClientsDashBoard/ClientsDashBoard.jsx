import React from "react";
import Layout from "../../Layout/threeGridLayout";
import styling from "./clientdashboard.module.css";
import work from "../../../assets/clientImages/work.png";
import work_history from "../../../assets/clientImages/work_history.png";
import profile from "../../../assets/clientImages/profile.png";

import { MdOutlineMilitaryTech, MdOutlineNotifications ,MdForum} from "react-icons/md";
import {BsQuestionLg} from 'react-icons/bs'

const ClientsDashBoard = ({settings}) => {
  const {
    tableCon,
    dashboardConGrid,
    subgridCon,
    projectStatus,
    secondGrid,
    billingDisplay
  } = styling;
  return (
    <Layout layoutSettings={settings}>
  
        <div className={dashboardConGrid}>
          <div>
            <input type="search" name="" placeholder="Search..." />
            {/* <span><img src={search} alt="search" /></span> */}

            {settings === true?'':<div className={subgridCon}>
              <div>
                <article>
                  <h4>Ongoing Jobs</h4>
                  <p>1</p>
                </article>
                <article>
                  <img src={work_history} alt="work" />
                </article>
              </div>
              <div>
                <article>
                  <h4>Project complected </h4>
                  <p>4</p>
                </article>
                <article>
                  <img src={work} alt="work" />
                </article>
              </div>
            </div>}
            {settings == true?'':<div className={projectStatus}>
              <h3>Ongoing Project/Status</h3>
              <p>Nysäling. Sären tepreren bifas. </p>
              <article>
                <p></p>
              </article>
            </div>}
          </div>
          <div className={secondGrid}>
            <article>
              {settings===true?'':<MdOutlineMilitaryTech size={40} />}
              { settings===true?'':<MdOutlineNotifications size={40} />}
              <button>
                <img src={profile} alt="profile" />
              </button>
            </article>
            {settings=== true?'':<div>
              <h2>Details of Onging project</h2>
              <p>High Current (Generator)</p>
              <p>Lighting </p>
              <p>Installation</p>
            </div>}
            {settings===true?'':<div>
                <div>
                    <button>
                        <BsQuestionLg/>
                    </button>
                    <article>
                        <p>Fonodiktisk. Bäs hegidkk</p>
                        <h5>Get Help</h5>
                    </article>
                </div>
                <div>
                    <button>
                        <MdForum/>
                    </button>
                    <article>
                        <p>Fonodiktisk. Bäs hegidkk</p>
                        <h5>Give feedback</h5>
                    </article>
                </div>
            </div>}
          </div>
        </div>
        {settings === true?"":<div className={tableCon}>
          <article>
            <h4>Invoice</h4>
            <article>
            <p>1 - 50</p>
            <button></button>
            </article>
          </article>
          <table cellPadding={4}>
            <thead>
              <tr>
                <th>DATE</th>
                 <th>DETAILS</th>
                  <th>AMOUNT</th>
                   <th>DOWNLOAD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08/07/2022</td>
                <td>High Current (Generator)</td>
                <td>N 35,000</td>
                <td>Invoice 08 July 2022 </td>
              </tr>
              <tr>
                <td>08/07/2022</td>
                <td>Lighting </td>
                <td>N 20,000</td>
                <td>Invoice 08 July 2021 </td>
              </tr>
              <tr>
                <td>08/07/2022</td>
                <td>Installation </td>
                <td>N 80,000</td>
                <td>Invoice 18 May 2022 </td>
              </tr>
              <tr>
                <td>08/07/2022</td>
                <td>Lighting </td>
                <td>N 15,000</td>
                <td>Invoice 08 Sep 2022 </td>
              </tr>
              
            </tbody>
            <tfoot>
              <tr>
              <td></td>
                <td></td>
                <td></td>
                <td><a href="#">Next</a> </td>

              </tr>
            </tfoot>
          </table>
        </div>}
        {settings === true?<div className={billingDisplay}>
          <article></article>
        </div>:''}
    
    </Layout>
  );
};

export default ClientsDashBoard;
