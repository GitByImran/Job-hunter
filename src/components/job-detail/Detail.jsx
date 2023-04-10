import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useLoaderData, useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams();

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item.id == id);
        console.log(job);
      });
  }, [id]);

  return (
    <div>
      <h2>details page</h2>
    </div>
  );
};

export default Detail;
