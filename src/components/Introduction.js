import React from "react";
import "./Introduction.css";


export default function Introduction() {
  return (
    <React.Fragment>
      <div className="profile-photo">
        <img src="https://drive.google.com/uc?export=view&id=1Ydd8gkGk_Su_N1txkEG2kpiMgbjceOvS" alt="profile-photo" />
        <p id="title">-Junior Full Stack Web Developer-</p>
      </div>
        <div className="intro-text" id="intro-text">
          <p id="content">An enthusiastic Full Stack Developer graduated from Lighthouse Lab.</p>
          <p id="content">Skilled with JavaScript and React.js front-end developing. Also strong in Express.js backend building.</p>
          <p id="content">A fast-learner and can be kept up to date with the new introduced contents. Indeed enjoys the programming process in web development and is willing to learn to become a competitive developer.</p>
        </div>
    </React.Fragment>
  );
};