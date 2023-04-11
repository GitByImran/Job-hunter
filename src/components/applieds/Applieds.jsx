import React, { useEffect, useState } from "react";
import "./Applieds.css";
import Apply from "../inner-components/applied-card/Apply";

const Applieds = () => {
  const applied = JSON.parse(localStorage.getItem("applied-jobs"));

  const [card, setCard] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => {
        const appliedData = data
          .filter((item) => Object.keys(applied).includes(item.id + ""))
          .filter((item) => {
            if (filter === "All") return true;
            return item.remote_or_onsite === filter;
          });
        setCard(appliedData);
      });
  }, [filter]);

  return (
    <div>
      <div className="section-header">
        <h2>applied jobs</h2>
      </div>

      <div className="applied-container">
        <div className="filter">
          <select
            className="filter-btn"
            defaultValue="random"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
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
