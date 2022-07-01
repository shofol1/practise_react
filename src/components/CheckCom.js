import React, { Component } from "react";

export default class CheckCom extends Component {
  constructor() {
    super();
  }
  state = { name: "shofol" };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleName}
          placeholder="Enter your name"
          value={this.state.name}
        />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
