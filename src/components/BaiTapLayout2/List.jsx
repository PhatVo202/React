import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    return (
      <div>
        <section className="pt-4">
          <div className="container px-lg-5">
            {/* Page Features*/}
            <div className="row gx-lg-5">
              <div className="col-lg-6 col-xxl-4 mb-5">
                <Item />
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <Item />
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <Item />
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <Item />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default List;
