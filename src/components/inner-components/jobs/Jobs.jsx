import React from "react";
import "./Jobs.css";
import Job from "../job/Job";

const Jobs = (props) => {
  return (
    <div>
      <Job data={props.data} handleViewDetails={props.handleViewDetails} />
    </div>
  );
};

export default Jobs;
