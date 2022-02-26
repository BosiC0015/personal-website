import React from "react";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { TiBusinessCard } from "react-icons/ti";
import { AiOutlineProject } from "react-icons/ai";
import "./Nav.css";
import ReactTooltip from "react-tooltip";


class Nav extends React.Component {
  render () {
    return (
      <nav>
        <a data-tip='Go To Homepage!' className="home" href="/">
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
            <a data-tip='Short introduction' href="/#intro-text"><CgProfile /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-about-me' }}>
            <a data-tip='More about me' href="/more-about-me"><TiBusinessCard /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-projects' }}>
            <a data-tip='My projects' href="/projects"><AiOutlineProject /></a>
          </IconContext.Provider>
          <ReactTooltip place="bottom" type="dark" effect="solid"/>
        </div>
      </nav>
    );
  };
};

export { Nav };