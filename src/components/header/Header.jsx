import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-content">
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">higher hires</Link>
        </div>
        <div className="nav-link">
          <Link to="/">home</Link>
          <Link to="/statistics">statistics</Link>
          <Link to="/applieds">applied jobs</Link>
          <Link to="/blogs">blogs</Link>
        </div>
        <div className="nav-btn">
          <button className="nav-apply-btn">Start Applying</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
