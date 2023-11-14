// LogoutComponent.js
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userAction";

const LogoutComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutComponent;
