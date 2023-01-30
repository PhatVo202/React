import React, { Component } from "react";
import ItemPhone from "./ItemPhone";
import data from "../../data/dataPhone.json";

export default class DanhSachPhone extends Component {
  renderPhone = () => {
    return data.map((item) => {
      return (
        <div className="col-4" key={item.maSP}>
          <ItemPhone
            addToCart={this.props.addToCart}
            item={item}
            showDetailPhone={this.props.showDetailPhone}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderPhone()}</div>
      </div>
    );
  }
}
