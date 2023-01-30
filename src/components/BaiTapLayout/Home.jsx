import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 bg-dark">
              <Header />
            </div>
            <div className="col-5 bg-warning">
              <Navigation />
            </div>
            <div className="col-7 bg-success">
              <Content />
            </div>
            <div className="col-12" bg-light>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
