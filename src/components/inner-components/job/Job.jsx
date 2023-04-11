import React from "react";
import "./Job.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Job = (props) => {
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
        <span>
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          {location}
        </span>
        <span>
          <FontAwesomeIcon icon={faDollar} className="icon" />
          Salary : {salary}
        </span>
      </div>
      <Link to={`/detail/${id}`} className="view-detail-btn">
        view details
      </Link>
    </div>
  );
};

export default Job;
