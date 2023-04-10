import React from "react";
import "./Category.css";

const Category = (props) => {
  const { logo, title, available } = props.category;
  return (
    <div className="category-container">
      <div className="category-card">
        <img src={logo} alt="" />
        <h2>{title}</h2>
        <p>{available}+ Jobs Available</p>
      </div>
    </div>
  );
};

export default Category;
