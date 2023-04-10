import React, { useEffect, useState } from "react";
import "./Categories.css";
import Category from "../category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="categories-content">
      {categories.map((category) => (
        <Category key={category.title} category={category} />
      ))}
    </div>
  );
};

export default Categories;
