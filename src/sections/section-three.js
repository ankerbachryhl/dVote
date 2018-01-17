import React from "react";
import Button from "../components/button";
import Particles from "react-particles-js";
import "../App.css";

const SectionThree = props => {
  return (
    <div className="container third-section">
      <div className="row">
        <div className="twelwe columns">
          <p className="title">Kom i gang</p>
          <Button text="Stem nu" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
