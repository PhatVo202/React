import React, { Component } from "react";
import ChildProp from "./ChildProp";
import ChildrenProp from "./ChildrenProp";

export default class ParentProp extends Component {
  imageUrl =
    "https://images.samsung.com/is/image/samsung/p6pim/vn/2202/gallery/vn-galaxy-a53-5g-a536-sm-a536elbgxxv-531435476?%24650_519_PNG%24&fbclid=IwAR0dyNgtjuxiqNkZ92_tOfsfFogt0Ae7FW71Ou1I8T7ZoG6z6z8fzMfGyDU";

  productDetail = {
    price: 3000,
  };

  showName = (name) => {
    alert(name);
  };

  render() {
    return (
      <>
        <h1 className="text-center">Prop</h1>
        <ChildProp
          name="Samsung"
          imageUrl={this.imageUrl}
          productDetail={this.productDetail}
          showName={this.showName}
        />
        <br />

        <ChildrenProp>
          <ChildProp
            name="Iphone"
            imageUrl="https://fptshop.com.vn/Uploads/Originals/2021/10/1/637686973775896947_ip-12-dd.jpg?fbclid=IwAR1at2A0IV2eMCLo46k4EnznG4qxjYfzaSqJ_RjU12d0FQo2_ZbuWjZ_6oE"
            productDetail={{ price: 5000 }}
            showName={this.showName}
          />
        </ChildrenProp>
      </>
    );
  }
}
