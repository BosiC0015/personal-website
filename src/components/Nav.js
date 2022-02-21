import React from "react";
import { IconContext } from "react-icons";
import { BsChatText } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
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
            <a href="/#intro-text"><BsChatText /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-projects' }}>
            <a href="/projects"><AiOutlineProject /></a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-contact-me' }}>
            <a href="/#contact"><RiContactsLine /></a>
          </IconContext.Provider>
        </div>
      </nav>
    );
  };
};

export { Nav };