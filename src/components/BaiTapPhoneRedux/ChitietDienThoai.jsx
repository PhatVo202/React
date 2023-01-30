import React, { Component } from "react";
import { connect } from "react-redux";

class ChitietDienThoai extends Component {
  render() {
    let { phoneDetail } = this.props;
    return (
      <>
        <div className="row mt-4">
          <div className="col-4 text-center">
            <h2>{phoneDetail.tenSP}</h2>
            <img className="img-fluid" src={phoneDetail.hinhAnh} />
          </div>
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <td colSpan={2}>
                    <h1>Thông số kĩ thuật</h1>
                  </td>
                </tr>
                <tr>
                  <td>Màn hình</td>
                  <td>{phoneDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{phoneDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{phoneDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{phoneDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{phoneDetail.rom}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{phoneDetail.ram}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phoneDetail: state.phoneReducer.phoneDetail,
  };
};

export default connect(mapStateToProps, null)(ChitietDienThoai);
