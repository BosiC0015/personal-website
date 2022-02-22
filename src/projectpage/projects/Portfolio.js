import { ExternalLink } from "../ExternalLink";
import "../Projectpage.css";


export default function TinyApp() {
  return (
    <section className="project-card">
      <div className="project-title">
        <h5>
          <a href="https://github.com/BosiC0015/personal-website" target="_blank">
            Portfolio Website
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="project-img">
          <img className="project-img" src="https://drive.google.com/uc?export=view&id=1sXrPdJb6fUJ6ItipHiSHQgwLQ42IXM1u" alt="portfolio" />
        </div>
        <div className="text">
          <div className="stacks">
            <p id="stacks">React.js, CSS</p>
          </div>
          <div className="desc">
            <p id="description">My portfolio website, built with React.js and CSS. There is a homepage for introduction and connection and a project page outlining all my projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};