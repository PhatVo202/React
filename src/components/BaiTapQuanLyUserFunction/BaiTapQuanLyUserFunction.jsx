import React from "react";
import RegisterFormFunction from "./RegisterFormFunction";
import UserManagmentFunction from "./UserManagmentFunction";

export default function BaiTapQuanLyUserFunction() {
  return (
    <div className="w-75 mx-auto mt-5">
      <RegisterFormFunction />
      <UserManagmentFunction />
    </div>
  );
}
