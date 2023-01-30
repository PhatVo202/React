import React, { Component } from "react";

class BaiTapStyling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsize: 16,
    };
  }
  handleDecrease = () => {
    this.setState({
      fontsize: this.state.fontsize - 10,
    });
  };
  handleIncrease = () => {
    this.setState({
      fontsize: this.state.fontsize + 10,
    });
  };
  render() {
    return (
      <>
        <h1>Bai tap Styling</h1>
        <button onClick={this.handleDecrease} className="btn btn-primary">
          Decresae
        </button>
        <button onClick={this.handleIncrease} className="btn btn-success">
          Increase
        </button>
        <p style={{ fontSize: this.state.fontsize }}>Bootcamp 36</p>
      </>
    );
  }
}

export default BaiTapStyling;
