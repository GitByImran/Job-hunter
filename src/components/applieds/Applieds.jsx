import React, { useEffect, useState } from "react";
import "./Applieds.css";

const Applieds = () => {
  const getApplied = JSON.parse(localStorage.getItem("applied-jobs"));

  console.log(Object.keys(getApplied));
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div>
      <div className="section-header">
        <h2>applied jobs</h2>
      </div>
      <h3>apply</h3>
    </div>
  );
};

export default Applieds;
