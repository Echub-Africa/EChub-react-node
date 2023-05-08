import React from "react";
import check from "../../assets/checks check.svg";


export default function secondSection() {
  return (
    <div className="secondSection">
      <div className="secondFirst">
        <h1 className="second-h1">
          {" "}
          Are you presently facing these challenges?
        </h1>
        <div className="paragraph mb-3 mt-4">
          <img src={check} alt="" />
          <p className="para">Constant troubles with quack</p>
        </div>
        <div className="paragraph mb-3">
          <img src={check} alt="" />
          <p className="para">
            Distractions from core business areas due to frequent facility
            management issues
          </p>
        </div>
        <div className="paragraph mb-3">
          <img src={check} alt="" />
          <p className="para">
            Unexplained costs that lead to lack of transparency
          </p>
        </div>
        <div className="paragraph mb-3">
          <img src={check} alt="" />
          <p className="para">
            Difficulty in tracking your maintenance requests leading to a long
            time on closing maintenance requests
          </p>
        </div>
        <button
          type="button"
          class="btn btn-primary firstButton mb-5 mt-4 pr-3 pt-4 pb-4 pl-3"
        >
          I WANT AN EASY LIFE  &nbsp;&nbsp;<i class="fas fa-angle-right"></i>
        </button>
      </div>
      <div className="secondLeft ">
        <iframe
          height="200"
          src="https://www.youtube.com/embed/1lJ6_HE4Dnw"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
