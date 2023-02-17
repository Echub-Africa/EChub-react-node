import React from "react";
import Lists from "../../Reusable/Lists/Lists";
import styles from "./preferences.module.css";
import { chooseData, preferencesdata } from "./staticData";


const Preferences = () => {
  const { container } = styles;
  return (
    <section className={container}>
      <div>
        {preferencesdata.map((pre) => (
          <article>
            <img src={pre.imgUrl} alt="" />
            <h3>{pre.titile}</h3>
            <p>{pre.summary}</p>
          </article>
        ))}
      </div>
      <article>
        <h2>Why top companies prefers Blue Collars’ talents</h2>
        <ul>
          {chooseData.map(chose=>(
            <Lists description={chose}/>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Preferences;
