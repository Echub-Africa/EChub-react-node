import React from "react";
import Services from "../Reusable/Services/Services";

export default function ThirdSection() {
  return (
    <div className="thirdSection">
      <div className="col col-lg-6 third">
        <h1>What do we do?</h1>
        <ul>
          <li className="bold">
            Tech bro's :repair and maintain work tools ,starting from #3,000{" "}
          </li>
          <li className="bold">
            Homeowners: keep your properties and appliances in excellent
            condition with scheduled maintenance and repairs
          </li>
          <li className="bold">
            Startups: Maintain output & amazing outlook of your workspace with
            minimal cost
          </li>
          <li className="bold">
            Contractors: Hire competence you can always depend on
          </li>
          <li className="bold">
            Industrial & Commercial Stakeholders: manage properties to prevent
            costly repairs due to wear and tear and general deferred maintenance
          </li>
        </ul>
      </div>
      <div className="col col-lg-6 cardDiv mt-4 mb-4">
            <Services login='home'/>
        

      </div>

    </div>
  );
}
