import React, { Component } from "react";
import data from "../../data/dataPhone.json";
import ChitietDienThoai from "./ChitietDienThoai";
import GioHang from "./GioHang";
import DanhSachPhone from "./DanhSachPhone";

export default class BaiTapPhoneRedux extends Component {
  render() {
    return (
      <>
        <section className="container">
          <GioHang />

          <DanhSachPhone />

          <ChitietDienThoai />
        </section>
      </>
    );
  }
}
