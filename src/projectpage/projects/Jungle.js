import { ExternalLink } from "../ExternalLink";
import "../Projectpage.css";


export default function Jungle() {
  return (
    <section id="jungle" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/jungle" target="_blank">
            Jungle
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="project-img">
          <img className="project-img" src="https://drive.google.com/uc?export=view&id=1AfWNBZ5j6wZ-iaP5a69la0RiJ5y2oD4-" alt="jungle" />
        </div>
        <div className="text">
          <div className="stacks">
            <p id="stacks">Ruby on Rails, HTML, SCSS, PostgreSQL</p>
          </div>
          <div className="desc">
            <p id="description">Given a mini e-commerce website prototype built with Ruby on Rails, follow the tasks to debug and add features to complete the user stories. A user or admin can see most of the normal e-commerce website features here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};