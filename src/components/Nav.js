import React from "react";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { AiOutlineProject } from "react-icons/ai";
import "./Nav.css";


class Nav extends React.Component {
  render () {
    return (
      <nav>
        <a href="/">
          <div className="page-title">
            Bosi Chen
          </div>
        </a>
        <div className="link-icons">
          <IconContext.Provider value={{ size: '2em', className: 'icon-intro' }}>
            <a href="/#intro-text"><CgProfile /></a>
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