import React, { Component } from "react";
import { connect } from "react-redux";

class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.decrease} className="btn btn-primary">
          Decrease
        </button>
        <button onClick={this.props.increase} className="btn btn-success">
          Increase
        </button>
        <button onClick={this.props.random} className="btn btn-danger">
          Random
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      const action = {
        type: "INCREASE",
      };

      dispatch(action);
    },
    decrease: () => {
      const action = {
        type: "DECREASE",
      };

      dispatch(action);
    },
    random: () => {
      dispatch({
        type: "RANDOM",
        payload: Math.random(),
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Child);
