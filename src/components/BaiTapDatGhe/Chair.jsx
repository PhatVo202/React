import React, { Component } from "react";
import { connect } from "react-redux";

class Chair extends Component {
  mappingClass = () => {
    const { hang, dangChon, daDat } = this.props;

    if (dangChon) {
      return "selected";
    }

    if (!hang) {
      return "number";
    }

    if (daDat) {
      return "booked";
    }

    if (!daDat) {
      return "available";
    }
  };
  render() {
    return (
      <div className={`chair ${this.mappingClass()}`}>
        <button onClick={() => alert(1)} className="btn text-light">
          {this.props.name}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.bookSticketReducer.danhSachGheDangDat,
  };
};

export default connect()(Chair);
