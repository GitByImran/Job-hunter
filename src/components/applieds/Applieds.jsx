import React, { useEffect, useState } from "react";
import "./Applieds.css";
import Apply from "../inner-components/applied-card/Apply";

const Applieds = () => {
  const applied = JSON.parse(localStorage.getItem("applied-jobs"));

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => {
        const appliedData = data.filter((item) =>
          Object.keys(applied).includes(item.id + "")
        );
        setCard(appliedData);
      });
  }, []);

  const handleRemoteJobs = () => {
    console.log("......");
  };

  return (
    <div>
      <div className="section-header">
        <h2>applied jobs</h2>
      </div>

      <div className="applied-container">
        <div className="filter">
          <select className="filter-btn">
            <option value="filter">Filter By</option>
            <option onChange={() => handleRemoteJobs()} value="remote">
              Remote
            </option>
            <option value="onsite">Onsite</option>
          </select>
        </div>
        {card.map((data) => (
          <Apply key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Applieds;
