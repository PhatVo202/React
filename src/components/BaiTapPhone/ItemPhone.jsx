import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
    let { item } = this.props;
    let { showDetailPhone } = this.props;
    let { addToCart } = this.props;
    return (
      <>
        <div className="card">
          <img
            className="card-img-top"
            src={item.hinhAnh}
            alt="#"
            width={300}
            height={350}
          />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <button
              onClick={() => showDetailPhone(item)}
              className="btn btn-success"
            >
              XEM CHI TIẾT
            </button>
            <button
              onClick={() => addToCart(item)}
              className="btn btn-primary ml-4"
            >
              Them Gio Hang
            </button>
          </div>
        </div>
      </>
    );
  }
}
