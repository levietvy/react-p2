// LogoutComponent.js
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LogoutComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut);
    navigate("/login");
  };

  return (
    <div>
      <Button variant="light" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default LogoutComponent;
