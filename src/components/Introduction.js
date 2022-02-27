import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BiSearchAlt } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Introduction.css";


export default function Introduction() {
  const title = () => {
    return (
      <>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <BiSearchAlt />
        </IconContext.Provider>
        About Me:
      </>
    );
  };

  return (
    <React.Fragment>
      <div className="profile">
        <div className="bg-img"></div>
        <div id="title">
          <p id="greeting">Hello, my name is</p>
          <p id="name">BOSI CHEN</p>
          <p id="bio">A Junior Full Stack Web Developer</p>
          </div>
      </div>
      <DropdownButton id="dropdown-basic-button" title={title()}>
        <Dropdown.Item href="/#intro-text"><p className="explore">Short Introduction</p></Dropdown.Item>
        <Dropdown.Item href="/more-about-me"><p className="explore">About Me</p></Dropdown.Item>
        <Dropdown.Item href="/projects"><p className="explore">Explore My Projects</p></Dropdown.Item>
        <Dropdown.Item href="/more-about-me#certificates"><p className="explore">Related Certificates</p></Dropdown.Item>
        <Dropdown.Item href="https://resume.io/r/02BEvxBFo" target="_blank"><p className="explore">View My Resume</p></Dropdown.Item>
      </DropdownButton>
      <div className="intro-text" id="intro-text">
        <p className="content">An enthusiastic Full Stack Developer.</p>
        <p className="content">Skilled with JavaScript, React.js, HTML and CSS front-end developing. Also strong in Node.js and Express.js backend building techniques.</p>
        <p className="content">A fast-learner and can be kept up to date with the new introduced contents. Indeed enjoys the programming process in web development and is willing to learn to become a competitive developer.</p>
        <p id="more"><a id="more" href="/more-about-me">more...</a></p>
      </div>
    </React.Fragment>
  );
};