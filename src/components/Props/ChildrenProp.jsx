import React, { Component } from "react";

export default class ChildrenProp extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>{this.props.children}</h1>
        <p>Noi dung cua children prop</p>
      </>
    );
  }
}
