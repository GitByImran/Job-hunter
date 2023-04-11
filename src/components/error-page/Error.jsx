import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <div className="error-text">
        <h2>404</h2>
        <p>oops!!! page not found</p>
        <Link to="/" className="view-detail-btn">
          Go Back
        </Link>
      </div>
      <div className="error-img">
        <img src="https://i.ibb.co/3hRWDPz/Pngtree-robot-1296122.png" alt="" />
      </div>
    </div>
  );
};

export default Error;
