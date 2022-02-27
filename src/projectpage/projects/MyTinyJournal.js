import { ExternalLink } from "../ExternalLink";
import "../Projectpage.css";


export default function MyTinyJournal() {
  return (
    <section id="journal" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/journal" target="_blank">
            My Tiny Journal (Group Project)
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="project-img">
          <img className="project-img" src="https://drive.google.com/uc?export=view&id=1OE69gaAdQ_GKtoS_CsT7l8YdmIevPU47" alt="my-tiny-journal" />
        </div>
        <div className="text">
          <div className="stacks">
            <p id="stacks">React.js, SCSS, Express.js, PostgreSQL</p>
          </div>
          <div className="desc">
            <p id="description">A journaling web app. A user can create, modify, and delete all-day plans, plans at an exact time or long plans lasting for days. Users can also write diaries and track monthly habits as well. I worked on the tracker page and most of the final scss styling.</p>
          </div>
        </div>
      </div>
    </section>
  );
};