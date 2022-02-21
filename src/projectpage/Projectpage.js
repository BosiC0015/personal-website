import { Nav } from "../components/Nav";
import { ProjectHead } from "./ProjectHead";
import "./Projectpage.css";

export default function ProjectPage() {
  return (
    <main>
      <Nav />
      <div className="projects">
        <ProjectHead />
        <div className="projects-container">
          <section className="project-card">
            <div className="project-title">
              <h5>MLTD Calculator</h5>
            </div>
          </section>
          <section className="project-card">
            <div className="project-title">
              <h5>My Tiny Journal</h5>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};