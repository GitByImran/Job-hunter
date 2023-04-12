import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header-content">
      <nav className="navbar">
        <div className="nav-logo">
          <NavLink to="/">higher hires</NavLink>
        </div>
        <div className={toggle ? "nav-other-responsive" : "nav-other"}>
          <div className="nav-link">
            <NavLink to="/">home</NavLink>
            <NavLink to="/statistics">statistics</NavLink>
            <NavLink to="/applieds">applied jobs</NavLink>
            <NavLink to="/blogs">blogs</NavLink>
          </div>
          <div className="nav-btn">
            <button className="nav-apply-btn">Start Applying</button>
          </div>
        </div>
        <FontAwesomeIcon
          onClick={() => setToggle(!toggle)}
          icon={faBars}
          className="toggle-menu"
        />
      </nav>
    </div>
  );
};

export default Header;
