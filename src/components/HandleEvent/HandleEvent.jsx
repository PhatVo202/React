import React, { Component } from "react";

class HandleEvent extends Component {
  handleRegister() {
    alert("Dang ky thanh cong");
  }
  handleLogout(name) {
    alert(`${name} Da dang xuat`);
  }
  render() {
    return (
      <div>
        <h3>HandleEvent</h3>
        {/**Su kien co tham so */}
        <button
          onClick={() => {
            this.handleLogout("Cybersoft");
          }}
          className="btn btn-danger"
        >
          Logout
        </button>

        {/**Su kien khong co tham so */}
        <button
          onClick={() => {
            alert("dang nhap thanh cong!");
          }}
          className="btn btn-primary"
        >
          Login
        </button>
        <button onClick={this.handleRegister} className="btn btn-success">
          Register
        </button>
      </div>
    );
  }
}

export default HandleEvent;
