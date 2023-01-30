import React, { Component } from "react";
import "./style.scss";
import chairList from "../../data/danhSachGhe.json";
import Chair from "./Chair";
import InforChair from "./InforChair";

export default class BaiTapDatGhe extends Component {
  renderContent = () => {
    return chairList.map((item) => {
      return (
        <div className="wrap" key={item.hang}>
          <div className="seat">{item.hang}</div>
          {item.danhSachGhe.map((chair, index) => {
            return (
              <Chair
                key={chair.soGhe}
                dangChon={chair.dangChon}
                daDat={chair.daDat}
                hang={item.hang}
                name={index + 1}
              />
            );
          })}
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url('./img/bgmovie.jpeg')",
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <div className="container-xl">
            <div className="row">
              <div className="col-7">
                <h1 className="text-light">Dat ve xem phim Cyberlearn.vn</h1>
                <p className="text-center text-light">Man hinh</p>
                <div>{this.renderContent()}</div>
              </div>
              <div className="col-5">
                <div className="text-light" style={{ fontSize: "35px" }}>
                  Danh sach ghe ban chon
                  <InforChair />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
