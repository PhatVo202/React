import React, { Component } from "react";
import Child from "./Child";

import { connect } from "react-redux";

class Parent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Demo Redux</h3>
        <p>Count: {this.props.countRedux}</p>
        <Child />
      </div>
    );
  }
}

// const connect = () => {
//   return () => {};
// };

// lay state tu tren store chuyen thanh props component
const mapStateToProps = (state) => {
  return {
    countRedux: state.countReducer.count,
  };
};

//ham connect tra 1 component moi
const parentReduxComponent = connect(mapStateToProps, null)(Parent);
export default parentReduxComponent;
