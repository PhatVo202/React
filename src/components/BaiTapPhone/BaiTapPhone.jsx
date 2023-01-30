import React, { Component } from "react";
import data from "../../data/dataPhone.json";
import ChitietDienThoai from "./ChitietDienThoai";
import GioHang from "./GioHang";
import DanhSachPhone from "./DanhSachPhone";

export default class BaiTapPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneDetail: data[0],
      cart: [],
    };
  }

  addToCart = (phone) => {
    const data = [...this.state.cart];
    console.log(data);
    let index = data.findIndex((sp) => sp.maSP === phone.maSP);
    if (index === -1) {
      data.push({ ...phone, soLuong: 1 });
    } else {
      data[index].soLuong += 1;
    }
    this.setState({
      cart: data,
    });
  };

  deleteCart = (phone) => {
    const data = [...this.state.cart];
    let index = data.findIndex((sp) => sp.maSP === phone.maSP);
    if (index !== -1) {
      data.splice(index, 1);
    }
    this.setState({
      cart: data,
    });
  };

  tangGiamSl = (phone, isFlag) => {
    const data = [...this.state.cart];
    let index = data.findIndex((sp) => sp.maSP === phone.maSP);
    if (isFlag) {
      data[index].soLuong += 1;
    } else if (data[index].soLuong > 1) {
      data[index].soLuong -= 1;
    } else {
      if (window.confirm("Ban co chac muon xoa sp")) {
        data.splice(index, 1);
      }
    }
    this.setState({
      cart: data,
    });
  };

  showDetailPhone = (product) => {
    this.setState({
      phoneDetail: product,
    });
  };

  render() {
    const tangSoLuong = this.state.cart.reduce((total, item) => {
      return (total += item.soLuong);
    }, 0);
    let { phoneDetail, cart } = this.state;
    return (
      <>
        <section className="container">
          <GioHang
            deleteCart={this.deleteCart}
            tangGiamSl={this.tangGiamSl}
            cart={cart}
            tangSoLuong={tangSoLuong}
          />

          <DanhSachPhone
            addToCart={this.addToCart}
            showDetailPhone={this.showDetailPhone}
          />

          <ChitietDienThoai phoneDetail={phoneDetail} />
        </section>
      </>
    );
  }
}
