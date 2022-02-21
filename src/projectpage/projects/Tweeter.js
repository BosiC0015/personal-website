import "../Projectpage.css";


export default function Tweeter() {
  return (
    <section className="project-card">
      <div className="project-title">
        <h5>
          <a href="https://github.com/BosiC0015/tweeter" target="_blank">
            Tweeter
          </a>
        </h5>
      </div>
      <div className="about">
        <div className="project-img">
          <img className="project-img" src="https://drive.google.com/uc?export=view&id=1GnqFfmZIiDsLT46uBjT-DkKfLi-6qjqo" alt="tweeter" />
        </div>
        <div className="text">
          <div className="stacks">
            <p id="stacks">HTML, CSS, jQuery</p>
          </div>
          <div className="desc">
            <p id="description">Tweeter is a simple, single-page Twitter clone, having the function of sending a tweet and fetch and display tweets from the server data.</p>
          </div>
        </div>
      </div>
    </section>
  );
};