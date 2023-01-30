import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      name: "",
    };
  }

  showMessage = () => {
    this.setState({
      isShow: true,
      name: "Bootcamp 36",
    });
  };
  hiddenMessage = () => {
    this.setState(
      {
        isShow: false,
        name: "",
      },
      () => {
        console.log(this.state.isShow);
      }
    );
  };

  render() {
    return (
      <>
        <h3>State</h3>
        <button onClick={this.hiddenMessage} className="btn btn-primary">
          Hidden
        </button>
        <button onClick={this.showMessage} className="btn btn-success ml-3">
          Show
        </button>
        {!this.state.isShow ? "" : <p>{this.state.name}</p>}
      </>
    );
  }
}
