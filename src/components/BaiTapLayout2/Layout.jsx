import React, { Component } from "react";
import Footer from "../BaiTapLayout/Footer";
import Header from "../BaiTapLayout2/Header";
import Banner from "./Banner";
import List from "./List";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <List />
        <Footer />
      </div>
    );
  }
}

export default Layout;
