import React from "react";
import Button from "../components/button";
import Particles from "react-particles-js";
import "../App.css";

const SectionFour = props => {
  return (
    <div className="container fourth-section">
      <div className="row">
        <div className="twelwe columns">
          <p className="title">Introduktion</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fL30bWrGrfE"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            className="video"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
