import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <Link className="button" to="/dvote">
      {props.text}
    </Link>
  );
};

export default Button;
