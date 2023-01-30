import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function UserManagmentFunction() {
  const dispatch = useDispatch();

  const [keyword, setKeyWord] = useState("");

  const removeUser = (user) => {
    dispatch({
      type: "REMOVE_USER",
      payload: user,
    });
  };

  const setSelectedUser = (user) => {
    dispatch({
      type: "SET_SELECTED_USER",
      payload: user,
    });
  };

  const hookState = useSelector((state) => state.hookUserReducer.userList);

  const renderContent = () => {
    const filterData = hookState.filter((item) => {
      return item.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return filterData.map((item, index) => {
      return (
        <tr key={index} className={index % 2 === 0 ? "bg-light" : undefined}>
          <td>{index + 1}</td>
          <td>{item.username}</td>
          <td>{item.fullname}</td>
          <td>{item.email}</td>
          <td>{item.phoneNumber}</td>
          <td>{item.type}</td>
          <td>
            <button
              onClick={() => setSelectedUser(item)}
              className="btn btn-info mr-2"
            >
              EDIT
            </button>
            <button onClick={() => removeUser(item)} className="btn btn-danger">
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="card p-0 mt-3">
      <div className="card-header font-weight-bold">USER MANAGEMENT</div>
      <div className="row mt-4 px-3 ">
        <div className="col-4">
          <div className="form-group mb-0">
            <input
              type="text"
              placeholder="Search by full name..."
              className="form-control"
              onChange={(event) => setKeyWord(event.target.value)}
            />
          </div>
        </div>
        <div className="col-3 ml-auto">
          <div className="form-group mb-0">
            <select className="form-control">
              <option>All</option>
              <option>Client</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderContent()}</tbody>
        </table>
      </div>
    </div>
  );
}
