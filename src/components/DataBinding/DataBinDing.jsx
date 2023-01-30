import React, { Component } from "react";

export default class DataBinDing extends Component {
  productDescription = "Desription ...";
  renderPrice() {
    return 3000;
  }
  renderButton() {
    return (
      <>
        <button className="btn btn-primary">Add to cart</button>
        <button className="btn btn-success">View</button>
      </>
    );
  }
  render() {
    const productName = "Iphone";
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{productName}</h4>
            <p className="card-text">{this.productDescription}</p>
            <p>{this.renderPrice()}</p>
            <div>{this.renderButton()}</div>
          </div>
        </div>
      </div>
    );
  }
}
