import React from "react";
import "./Introduction.css";


export default function Introduction() {
  return (
    <React.Fragment>
      <div className="profile">
        <div id="title">
          <p id="greeting">Hello, my name is</p>
          <p id="name">BOSI CHEN</p>
          <p id="bio">A Junior Full Stack Web Developer</p>
          </div>
      </div>
      <p className="contact-me">About Me:</p>
        <div className="intro-text" id="intro-text">
          <p className="content">An enthusiastic Full Stack Developer.</p>
          <p className="content">Skilled with JavaScript, React.js, HTML and CSS front-end developing. Also strong in Node.js and Express.js backend building techniques.</p>
          <p className="content">A fast-learner and can be kept up to date with the new introduced contents. Indeed enjoys the programming process in web development and is willing to learn to become a competitive developer.</p>
          <p id="more"><a id="more" href="/more-about-me">more...</a></p>
        </div>
    </React.Fragment>
  );
};