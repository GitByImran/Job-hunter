import React from "react";
import "./Job.css";
import { Link } from "react-router-dom";

const Job = (props) => {
  const handleViewDetails = props.handleViewDetails;
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
    <div className="job-content">
      <img src={company_logo} alt="" />
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <div className="job-type">
        <span>{remote_or_onsite}</span>
        <span>{fulltime_or_parttime}</span>
      </div>
      <div className="location-and-salary">
        <span>{location}</span>
        <span>{salary}</span>
      </div>
      <button onClick={() => handleViewDetails(props.data)}>
        view details
      </button>
      <Link to={`/detail/${id}`}>show details</Link>
    </div>
  );
};

export default Job;
