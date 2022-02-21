import React from "react";
import { IconContext } from "react-icons";
import { MdViewModule, MdViewList } from 'react-icons/md';


class ProjectHead extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="title">
          <h2>My Projects</h2>
        </div>
        <div className="change-projects-view">
          <IconContext.Provider value={{ size: '2em', className: 'icon-view' }}>
            <MdViewModule />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '2em', className: 'icon-view' }}>
            <MdViewList />
          </IconContext.Provider>
        </div>
      </div>
    );
  };
};

export { ProjectHead };