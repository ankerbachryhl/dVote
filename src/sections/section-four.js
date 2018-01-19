import React from "react";
import Button from "../components/button";
import Particles from "react-particles-js";
import "../App.css";

const SectionFour = props => {
  return (
    <div className="container fourth-section">
      <div className="row">
        <div className="twelwe columns">
          <Particles
            className="particles"
            params={{
              particles: {
                number: { value: 75 },
                size: { value: 3 },
                line_linked: { distance: 250 }
              }
            }}
          />
          <p className="title">Introduktion</p>
          <iframe
            width="860"
            height="484"
            src="https://www.youtube.com/embed/KfiuUIn7VwU"
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
