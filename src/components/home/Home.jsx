import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* cover section */}
      <main>
        <div className="cover">
          <div className="cover-text">
            <h2>
              One Step Closer To Your
              <span> Dream Job</span>
            </h2>
            <p>
              Finding the right job made easy with Higher Hires. Register Now
              and Apply to the best jobs! Get Headhunted By Top Recruiters and
              Find the Right Job On Higher Hires.
            </p>
            <button>Get Started</button>
          </div>
          <div className="cover-img">
            <img
              src="https://i.ibb.co/8dbhF6R/businessman-11.png"
              alt="businessman-11"
            />
          </div>
        </div>
      </main>

      {/* job category section */}
      <div className="categories-container">
        <div className="section-title">
          <h2>Job Category List</h2>
          <p>
            We are providng all the IT relatives jobs for you. Find you're one
          </p>
        </div>
      </div>

      {/* job category section */}
      <div className="categories-container">
        <div className="section-title">
          <h2>Featured Jobs</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Home;
