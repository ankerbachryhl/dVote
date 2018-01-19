import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <a href="https://ankerbachryhl.github.io/product-desc/index.html">
      <button className="button">{props.text}</button>
    </a>
  );
};

export default Button;
