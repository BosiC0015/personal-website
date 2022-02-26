import React from "react";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { TiBusinessCard } from "react-icons/ti";
import { AiOutlineProject } from "react-icons/ai";
import "./Nav.css";


class Nav extends React.Component {
  render () {
    return (
      <nav>
        <a className="home" href="/">
          <div className="page-title">
            <div className="smallscreen">
              Bosi Chen
            </div>
            <div className="largescreen">
              Bosi Chen Portfolio
            </div>
          </div>
        </a>
        <div className="link-icons">
          <IconContext.Provider value={{ size: '2em', className: 'icon-intro' }}>
            <a href="/#intro-text"><CgProfile /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-about-me' }}>
            <a href="/more-about-me"><TiBusinessCard /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-projects' }}>
            <a href="/projects"><AiOutlineProject /></a>
          </IconContext.Provider>
        </div>
      </nav>
    );
  };
};

export { Nav };