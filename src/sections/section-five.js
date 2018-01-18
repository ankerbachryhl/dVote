import React, { Component } from "react";
import "../App.css";
import web3 from "../web3";
import votingsystem from "../votingsystem";

class SectionFive extends Component {
  state = {
    statement: ""
  };

  async componentDidMount() {
    const statement = await votingsystem.methods.statement().call();

    this.setState({ statement });
  }

  render() {
    return (
      <div className="container fifth-section">
        <div className="row">
          <div className="twelwe columns">
            <p className="title">Stem nu</p>
            <p>{this.state.statement}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFive;
