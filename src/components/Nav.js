import React from "react";
import { IconContext } from "react-icons";
import { BsChatText } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import "./Nav.css";


class Nav extends React.Component {
  render () {
    return (
      <nav>
        <div className="page-title">
          Bosi Chen
        </div>
        <div className="link-icons">
          <IconContext.Provider value={{ size: '2em', className: 'icon-intro' }}>
            <a href="#intro-text"><BsChatText /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-projects' }}>
            <AiOutlineProject />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-contact-me' }}>
            <a href="#contact"><GrContactInfo /></a>
          </IconContext.Provider>
        </div>
      </nav>
    );
  };
};

export { Nav };