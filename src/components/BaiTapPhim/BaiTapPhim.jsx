import { Alert } from "bootstrap";
import React, { Component } from "react";
import data from "../../data/DataFilms.json";

export default class BaiTapPhim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }

  renderMovieList = () => {
    return this.state.mangPhim.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img
              className="card-img-top"
              src={item.hinhAnh}
              alt="#"
              width={300}
              height={400}
            />
            <div className="card-body">
              <h4 className="card-title">{item.tenPhim}</h4>
              <p className="card-text">
                {item.moTa.length > 100
                  ? item.moTa.substring(0, 100) + "..."
                  : item.moTa}
              </p>
              <button
                onClick={() => this.showDescription(item.moTa)}
                className="btn btn-primary"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  showDescription = (desc) => {
    alert(desc);
  };

  render() {
    return (
      <>
        <h1 className="text-center bg-dark text-white">Phim Moi</h1>
        <div className="container-xl">
          <div className="row">{this.renderMovieList()}</div>
        </div>
      </>
    );
  }
}
