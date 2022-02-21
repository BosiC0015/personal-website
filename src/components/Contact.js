import React from "react";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub, BsTwitter, BsMedium } from "react-icons/bs";
import "./Contact.scss";


class Contact extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <p className="contact-me">Find & Contact Me:</p>
        <div className="contact-icons">
          <IconContext.Provider value={{ color: '#66ccff', size: '2em', className: 'contact-icons' }}>
            <a href="mailto:chenbosi.bosi@gmail.com"><MdEmail /></a>
            <a href="https://www.linkedin.com/in/bosi-chen-79657421b/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/BosiC0015" target="_blank"><BsGithub /></a>
            {/* <a href="https://twitter.com/BosiChen0_o"><BsTwitter /></a> */}
            {/* <a href="https://medium.com/@chenbosi.bosi" target="_blank"><BsMedium /></a> */}
          </IconContext.Provider>
        </div>
      </div>
    );
  };
};

export { Contact };