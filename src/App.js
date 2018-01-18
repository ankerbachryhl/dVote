import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Particles from "react-particles-js";

import SectionOne from "./sections/section-one";
import SectionTwo from "./sections/section-two";
import SectionThree from "./sections/section-three";
import SectionFour from "./sections/section-four";
import SectionFive from "./sections/section-five";

const Home = props => {
  return (
    <div className="page-one">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

const dVote = () => {
  return (
    <div>
      <SectionFour />
      <SectionFive />
    </div>
  );
};

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
