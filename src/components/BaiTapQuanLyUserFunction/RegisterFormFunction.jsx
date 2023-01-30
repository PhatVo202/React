import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterFormFunction() {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const selectedUser = useSelector(
    (state) => state.hookUserReducer.selectedUser
  );

  const [values, setValues] = useState({
    username: "",
    fullname: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "Client",
  });

  const [errors, setErrors] = useState({
    username: "",
    fullname: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    let message = "";

    const { name, title, validity } = event.target;

    const { valueMissing, patternMismatch } = validity;

    if (valueMissing) {
      message = `${title} is required`;
    }

    if (patternMismatch) {
      message = `${title} is invalid partern`;
    }

    setErrors({
      ...errors,
      [name]: message,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = event.target.checkValidity();

    if (!isValid) {
      return;
    }

    if (selectedUser) {
      dispatch({
        type: "UPDATE_USER",
        payload: values,
      });
    } else {
      dispatch({
        type: "ADD_USER",
        payload: values,
      });
    }
  };

  useEffect(() => {
    if (selectedUser) {
      setValues({
        id: selectedUser.id,
        username: selectedUser.username,
        fullname: selectedUser.fullname,
        password: selectedUser.password,
        phoneNumber: selectedUser.phoneNumber,
        email: selectedUser.email,
        type: selectedUser.type,
      });
    }
  }, [selectedUser]);

  const { username, fullname, password, phoneNumber, email, type } =
    values || {};

  return (
    <div className="card p-0">
      <div className="card-header bg-warning text-white font-weight-bold">
        REGISTER FORM
      </div>
      <div className="card-body">
        <form
          ref={formRef}
          noValidate
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Username</label>
                <input
                  title="Username"
                  value={username}
                  required
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={(event) => handleChange(event)}
                  onBlur={(event) => handleBlur(event)}
                />
                <span className="text-danger">{errors.username}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  title="FullName"
                  value={fullname}
                  required
                  name="fullname"
                  type="text"
                  className="form-control"
                  onChange={(event) => handleChange(event)}
                  onBlur={(event) => handleBlur(event)}
                />
                <span className="text-danger">{errors.fullname}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  title="Password"
                  value={password}
                  required
                  name="password"
                  type="text"
                  className="form-control"
                  onChange={(event) => handleChange(event)}
                  onBlur={(event) => handleBlur(event)}
                />
                <span className="text-danger">{errors.password}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  title="Phone Number"
                  value={phoneNumber}
                  required
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  onChange={(event) => handleChange(event)}
                  onBlur={(event) => handleBlur(event)}
                />
                <span className="text-danger">{errors.phoneNumber}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  title="Email"
                  value={email}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="email"
                  type="text"
                  className="form-control"
                  onChange={(event) => handleChange(event)}
                  onBlur={(event) => handleBlur(event)}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Type</label>
                <select
                  title="Type"
                  value={type}
                  required
                  name="type"
                  className="form-control"
                  onChange={(event) => handleChange(event)}
                  onBlur={(event) => handleBlur(event)}
                >
                  <option>Client</option>
                  <option>Admin</option>
                </select>
                <span className="text-danger">{errors.type}</span>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button
              disabled={!formRef.current?.checkValidity()}
              className="btn btn-warning mr-2"
            >
              SAVE
            </button>
            <button type="reset" className="btn btn-outline-dark">
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
