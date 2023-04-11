import React from "react";
import "./Apply.css";
import { Link } from "react-router-dom";

const Apply = (props) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = props.data;
  return (
    <div className="applied-content">
      <div className="applied-job-img">
        <img src={company_logo} alt="" />
      </div>
      <div className="applied-job-info">
        <div className="applied-job-info-text">
          <p>{job_title}</p>
          <h3>{company_name}</h3>
          <div className="applied-job-type">
            <span>{remote_or_onsite}</span>
            <span>{fulltime_or_parttime}</span>
          </div>
          <div className="job-location-and-salary">
            <span>{location}</span>
            <span>{salary}</span>
          </div>
        </div>
        <Link to={`/detail/${id}`} className="view-detail-btn">
          view details
        </Link>
      </div>
    </div>
  );
};

export default Apply;
