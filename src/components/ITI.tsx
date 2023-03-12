import React, { Component } from "react";
interface itiProps {
  track: string;
}
export default class ITI extends Component<itiProps> {
  state = { number: 0 };

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <>
        <h1>ITI Component! - {this.props.track} </h1>
        <h2>Number: {this.state.number}</h2>
        <button onClick={this.handleClick} className="btn btn-primary">
          +
        </button>
      </>
    );
  }
}
