import React from "react";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import "./Contact.scss";


class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <p className="contact-me">Contact me:</p>
        <div className="contact-icons">
          <IconContext.Provider value={{ color: '#66ccff', size: '2em', className: 'contact-icons' }}>
            <a href="mailto:chenbosi.bosi@gmail.com"><MdEmail /></a>
            <a href="https://www.linkedin.com/in/bosi-chen-79657421b/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/BosiC0015" target="_blank"><BsGithub /></a>
            <a href=""><BsTwitter /></a>
          </IconContext.Provider>
        </div>
      </div>
    );
  };
};

export { Contact };