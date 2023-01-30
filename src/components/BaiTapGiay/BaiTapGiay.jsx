import React, { Component } from "react";
import data from "../../data/dataShoes.json";
import Product from "./Product";

export default class BaiTapGiay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderListShoes = () => {
    return data.map((item) => {
      return (
        <div className="col-4" key={item.id}>
          <Product item={item} showDesc={this.showDesc} />
        </div>
      );
    });
  };

  showDesc = (desc) => {
    alert(desc);
  };
  render() {
    return (
      <>
        <div className="container">
          <h3>BaiTapGiay</h3>
          <div className="row">{this.renderListShoes()}</div>
        </div>
      </>
    );
  }
}
