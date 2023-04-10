import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="about">
          <div className="about-logo">
            <Link to="/">higher hires</Link>
            <p>
              Finding the right job made easy with <b>Higher Hires</b>. Register
              Now and Apply to the best jobs! Get Headhunted By Top Recruiters
              and Find the Right Job On <b>Higher Hires</b>.
            </p>
            <div className="media-link">
              <a href="">hello</a>
              <a href="">world</a>
              <a href="">...!!</a>
            </div>
          </div>
        </div>
        <div className="company">
          <h2>company</h2>
          <div className="quick-links">
            <a href="">About Us</a>
            <a href="">Work</a>
            <a href="">Latest News</a>
            <a href="">Careers</a>
          </div>
        </div>
        <div className="product">
          <h2>product</h2>
          <div className="quick-links">
            <a href="">Prototype</a>
            <a href="">Plans & Pricing</a>
            <a href="">Customers</a>
            <a href="">Integrations</a>
          </div>
        </div>
        <div className="support">
          <h2>support</h2>
          <div className="quick-links">
            <a href="">Help Desk</a>
            <a href="">Sales</a>
            <a href="">Become a Partner</a>
            <a href="">Developers</a>
          </div>
        </div>
        <div className="contact">
          <h2>contact</h2>
          <div className="quick-links">
            <a href="">524 Broadway , NYC</a>
            <a href="">+1 777 - 978 - 5570</a>
          </div>
        </div>
      </div>
      {/*  */}
      <hr className="hr" />
      {/*  */}
      <div className="footer-bottom">
        <h4>&copy;2023 Higher Hires. All Rights Reserved</h4>
        <h4>Powered by Higher Hires</h4>
      </div>
    </div>
  );
};

export default Footer;
