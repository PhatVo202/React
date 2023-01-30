import React, { Component } from "react";

export default class InforChair extends Component {
  render() {
    return (
      <div>
        <div>
          <button
            className="btn btn-warning"
            style={{ padding: "15px" }}
          ></button>
          <span style={{ fontSize: "15px", marginLeft: "3px" }}>
            Ghế đã chọn
          </span>
          <br />
          <button
            className="btn btn-success"
            style={{ padding: "15px" }}
          ></button>
          <span style={{ fontSize: "15px", marginLeft: "3px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button
            className="btn btn-secondary"
            style={{ padding: "15px" }}
          ></button>
          <span style={{ fontSize: "15px", marginLeft: "3px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr className="text-light" style={{ fontSize: "20px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>So ghe</td>
                <td>Gia</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
