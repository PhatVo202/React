import React, { Component } from "react";

export default class HistoryItem extends Component {
  mappingClass = () => {
    const { action } = this.props.item;
    if (action === "ADD") {
      return "success";
    }
    if (action === "DELETE") {
      return "danger";
    }
    if (action === "LIKE") {
      return "primary";
    }
    if (action === "UNLIKE") {
      return "warning";
    }
  };
  render() {
    const { action, vi, en } = this.props.item;
    return (
      <div className="border p-2 mb-2">
        <div className="content">
          <div className="d-flex justify-content-between">
            <span
              style={{ lineHeight: "revert" }}
              className={`badge badge-${this.mappingClass()}`}
            >
              {action}
            </span>
            <span>{new Date().toLocaleString()}</span>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="font-weight-bold">{en}</h5>
            <p className="mb-0">{vi}</p>
          </div>
        </div>
      </div>
    );
  }
}
