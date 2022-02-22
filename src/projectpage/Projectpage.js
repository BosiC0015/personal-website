import { Nav } from "../components/Nav";
import { ProjectHead } from "./ProjectHead";
import Portfolio from "./projects/Portfolio";
import MLTDCalculator from "./projects/MLTDCalculator";
import MyTinyJournal from "./projects/MyTinyJournal";
import InterviewScheduler from "./projects/InterviewScheduler";
import FoodPickupOrdering from "./projects/FoodPickupOrdering";
import Jungle from "./projects/Jungle";
import Tweeter from "./projects/Tweeter";
import TinyApp from "./projects/TinyApp";
import "./Projectpage.css";


export default function ProjectPage() {
  return (
    <main>
      <Nav />
      <div className="projects">
        <ProjectHead />
        <div className="projects-container">
          <Portfolio />
          <MLTDCalculator />
          <MyTinyJournal />
          <InterviewScheduler />
          <FoodPickupOrdering />
          <Jungle />
          <Tweeter />
          <TinyApp />
        </div>
      </div>
    </main>
  );
};