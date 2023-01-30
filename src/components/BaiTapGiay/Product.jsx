import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { item } = this.props;
    let { showDesc } = this.props;
    return (
      <>
        <div className="card">
          <img className="card-img-top" src={item.image} alt="#" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">
              {item.description.length > 100
                ? item.description.substring(0, 100) + "..."
                : item.description}
            </p>
            <button
              onClick={() => showDesc(item.description)}
              className="btn btn-primary"
            >
              Show Description
            </button>
          </div>
        </div>
      </>
    );
  }
}
