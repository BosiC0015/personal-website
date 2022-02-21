import "../Projectpage.css";


export default function InterviewScheduler() {
  return (
    <section className="project-card">
      <div className="project-title">
        <h5>
          <a href="https://github.com/BosiC0015/scheduler" target="_blank">
            Interview Scheduler
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="project-img">
          <img className="project-img" src="https://drive.google.com/uc?export=view&id=1y6ptqogztKAaQuCGwwEsJXVUpyRztjSj" alt="interview-scheduler" />
        </div>
        <div className="text">
          <div className="stacks">
            <p id="stacks">React.js, SCSS, PostgreSQL</p>
          </div>
          <div className="desc">
            <p id="description">A single page application for appointment booking. User can create new appointments, edit or delete(cancel) existing appointments. The app data is fetched from an API server using PostSQL database. Also includes various testing tools such as storybook, jest, and cypress.</p>
          </div>
        </div>
      </div>
    </section>
  );
};