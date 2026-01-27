import React, { Component } from "react";

class Classexample extends Component {
  constructor() {
    super();
    this.state = {
      name: "abc",
      age: 22,
    };
  }
  changeName = () => {
    this.setState({ name: "Vikas" });
  };
  render() {
    return (
      <>
        <h4>Class compo example</h4>
        <h4>Name is --{this.state.name}</h4>
        <h4>Age is --{this.state.age}</h4>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={() => this.setState({ age: 33 })}>Change Age</button>
      </>
    );
  }
}
export default Classexample;
