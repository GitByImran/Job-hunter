import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { addToDb } from "../utilities/fakedb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = () => {
  const { detailId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id == detailId);
        setDetails(job);
      });
  }, [detailId]);

  const handleApplyBtn = (data) => {
    addToDb(data);
  };

  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    location,
  } = details;

  return (
    <div className="detail-container">
      <div className="detail-left">
        <h4>
          Job Description : <p>{job_description}</p>
        </h4>
        <h4>
          Job Responsibility : <p>{job_responsibility}</p>
        </h4>
        <h4>
          Educational Requirements : <p>{educational_requirements}</p>
        </h4>
        <h4>
          Experiences : <p>{experiences}</p>
        </h4>
      </div>
      {/*  */}
      <div className="detail-right">
        <h2>Job Details</h2>
        <hr />
        <div className="content">
          <h4>
            Salary: <p>{salary}</p>
          </h4>
          <h4>
            Job Title: <p>{job_title}</p>
          </h4>
        </div>
        <h2>Contact Information</h2>
        <hr />
        <div className="content">
          <h4>
            Phone: <p>{contact_information ? contact_information.phone : ""}</p>
          </h4>
          <h4>
            Email: <p>{contact_information ? contact_information.email : ""}</p>
          </h4>
          <h4>
            Address: <p>{location}</p>
          </h4>
        </div>
        <button onClick={() => handleApplyBtn(id)}>Apply Now</button>
        <ToastContainer />
      </div>
      {/*  */}
    </div>
  );
};

export default Detail;
