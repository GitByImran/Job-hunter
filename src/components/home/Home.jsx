import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import "./Home.css";
import Categories from "../inner-components/categories/Categories";
import Jobs from "../inner-components/jobs/Jobs";

const Home = () => {
  const jobData = useLoaderData();
  const navigate = useNavigate();
  const [jobCount, setJobCount] = useState(6);

  useEffect(() => {
    if (!jobData) {
      navigate("/", { replace: true });
    }
  }, [jobData]);

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
            We are providng all the higher proffessional jobs for you. Find
            you're one
          </p>
        </div>
        <div className="content">
          <Categories />
        </div>
      </div>

      {/* job category section */}
      <div className="Featured-container">
        <div className="section-title">
          <h2>Featured Jobs</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="content">
          {jobData &&
            jobData
              .slice(0, jobCount)
              .map((data) => <Jobs key={data.id} data={data} />)}
        </div>
        <div className="featured-btn">
          <button className="job-container-btn" onClick={() => setJobCount(10)}>
            see all jobs
          </button>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Home;
