import React, { Component } from "react";

export default class BaiTapXe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/products/black-car.jpg",
    };
  }
  changeColor = (color) => {
    switch (color) {
      case "black":
        this.setState({
          img: "./img/products/black-car.jpg",
        });
        break;
      case "red":
        this.setState({
          img: "./img/products/red-car.jpg",
        });
        break;
      case "silver":
        this.setState({
          img: "./img/products/silver-car.jpg",
        });
        break;
      default:
        this.setState({
          img: "./img/products/steel-car.jpg",
        });
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <h3>Bai Tap Xe</h3>
          <div className="row">
            <div className="col-7">
              <img className="img-fluid" src={this.state.img} alt="" />
            </div>
            <div className="col-5">
              <button
                onClick={() => {
                  this.changeColor("black");
                }}
                className="btn btn-light"
              >
                <img
                  src="./img/icons/icon-black.jpg"
                  alt=""
                  width={50}
                  height={50}
                />
                <span className="ml-4">Brytal Black</span>
              </button>
              <br />
              <button
                onClick={() => {
                  this.changeColor("red");
                }}
                className="btn btn-light"
              >
                <img
                  src="./img/icons/icon-red.jpg"
                  alt=""
                  width={50}
                  height={50}
                />
                <span className="ml-4">Brytal Red</span>
              </button>
              <br />
              <button
                onClick={() => {
                  this.changeColor("silver");
                }}
                className="btn btn-light"
              >
                <img
                  src="./img/icons/icon-silver.jpg"
                  alt=""
                  width={50}
                  height={50}
                />
                <span className="ml-4">Brytal Silver</span>
              </button>
              <br />
              <button
                onClick={() => {
                  this.changeColor("steel");
                }}
                className="btn btn-light"
              >
                <img
                  src="./img/icons/icon-steel.jpg"
                  alt=""
                  width={50}
                  height={50}
                />
                <span className="ml-4">Brytal Steel</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
