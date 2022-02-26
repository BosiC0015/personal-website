import React from "react";
import { Dropdown } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProject, AiOutlineFileText } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Introduction.css";


export default function Introduction() {
  // const { getCollapseProps, getToggleProps } = useCollapse();

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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <BiSearchAlt />
          </IconContext.Provider>
          About Me:
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/#intro-text"><p className="explore"><CgProfile />Short Introduction</p></Dropdown.Item>
          <Dropdown.Item href="/projects"><p className="explore"><AiOutlineProject />Explore My Projects</p></Dropdown.Item>
          <Dropdown.Item href="https://resume.io/r/02BEvxBFo"><p className="explore"><AiOutlineFileText />View My Resume</p></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="intro-text" id="intro-text">
        <p className="content">An enthusiastic Full Stack Developer.</p>
        <p className="content">Skilled with JavaScript, React.js, HTML and CSS front-end developing. Also strong in Node.js and Express.js backend building techniques.</p>
        <p className="content">A fast-learner and can be kept up to date with the new introduced contents. Indeed enjoys the programming process in web development and is willing to learn to become a competitive developer.</p>
        <p id="more"><a id="more" href="/more-about-me">more...</a></p>
      </div>
    </React.Fragment>
  );
};