import React from "react";
import Button from "../components/button";
import Particles from "react-particles-js";
import "../App.css";

const SectionOne = props => {
  return (
    <div className="container first-section">
      <div className="row">
        <div className="twelwe columns">
          <div className="landing">
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
            <div className="titleBox">
              <p className="dVote">d:Vote</p>
              <p className="line" />
            </div>
            <div className="description">
              <p className="catch">
                Et distribueret stemmesystem der <br /> lever på Ethereum
                blockchain.
              </p>
            </div>
            <div className="cta-box">
              <Button text="Produktbeskrivelse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
