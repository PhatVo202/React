import React, { Component } from "react";

class RenderArray extends Component {
  personList = [
    { id: 1, name: "Cybersoft" },
    { id: 2, name: "Su Van Hanh" },
  ];

  renderPersonList = () => {
    return this.personList.map((item) => {
      return <p key={item.id}>{item.name}</p>;
    });
  };
  render() {
    return (
      <>
        <h1>Render Array</h1>
        {this.renderPersonList()}
      </>
    );
  }
}

export default RenderArray;
