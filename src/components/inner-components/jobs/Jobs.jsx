import React from "react";
import "./Jobs.css";
import Job from "../job/Job";

const Jobs = (props) => {
  return (
    <div>
      <Job data={props.data} />
    </div>
  );
};

export default Jobs;
