import { ExternalLink } from "../ExternalLink";
import "../Projectpage.css";


export default function MLTDCalculator() {
  return (
    <section id="mltd" className="project-card">
      <div className="project-title">
        <h5>
          <a className="project-title" href="https://github.com/BosiC0015/mltd-calculator" target="_blank">
            MLTD Calculator
            <ExternalLink />
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="project-img">
          <img className="project-img" src="https://drive.google.com/uc?export=view&id=1n0hlvUotByJeBU5oIiy-sijw4EE0PRD3" alt="mltd-calculator" />
        </div>
        <div className="text">
          <div className="stacks">
            <p id="stacks">React.js, SCSS, Bootstrap</p>
          </div>
          <div className="desc">
            <p id="description">A SPA for MLTD players to calculate how many times they need to play the regular or event songs to meet their event point goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};