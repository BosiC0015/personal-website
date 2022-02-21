import React from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";


class ExternalLink extends React.Component {
  render() {
    return (
      <IconContext.Provider value={{ size: '.9em' }}>
        <FiExternalLink />
      </IconContext.Provider>
    );
  };
};

export { ExternalLink };