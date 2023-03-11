import React, { Component } from "react";

export default class ITI extends Component {
  state = { number: 0 };
  // constructor() {
  //   super();
  // }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <>
        <h1>ITI Component! - </h1>
        <h2>Number: {this.state.number}</h2>
        <button onClick={this.handleClick} className="btn btn-primary">
          +
        </button>
      </>
    );
  }
}
