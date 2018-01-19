import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Particles from "react-particles-js";

import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";

class App extends Component {
  render() {
    return (
      <div className="page">
        <SectionOne />
        <SectionTwo />
        <SectionFour />
        <SectionFive />
      </div>
    );
  }
}

export default App;
