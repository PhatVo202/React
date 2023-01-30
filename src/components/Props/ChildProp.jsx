import React, { Component } from "react";

export default class ChildProp extends Component {
  render() {
    console.log(this.props);

    return (
      <>
        <img src={this.props.imageUrl} alt="" width={300} />
        <h1>{this.props.name}</h1>
        <p>{this.props.productDetail.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.props.showName(this.props.name)}
        >
          Detail
        </button>
      </>
    );
  }
}
