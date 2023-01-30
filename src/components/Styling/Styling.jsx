import React, { Component } from "react";

import "./style.css";

import styleModule from "./style.module.css";

export default class Styling extends Component {
  render() {
    return (
      <>
        <h1 className="cybersoft">Hello</h1>
        <p
          className={`${styleModule.bc36} ${styleModule["cybersoft-fontsize"]}`}
        >
          Module
        </p>
        <p style={{ color: "red", backgroundColor: "black", fontSize: 30 }}>
          Inline
        </p>
      </>
    );
  }
}
