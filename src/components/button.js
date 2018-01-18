import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  return <button className="button">{props.text}</button>;
};

export default Button;
