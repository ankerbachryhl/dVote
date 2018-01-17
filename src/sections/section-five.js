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
      <div>
        <h2>Vote contract</h2>
        <p>Vote: {this.state.statement}</p>
      </div>
    );
  }
}

export default SectionFive;
