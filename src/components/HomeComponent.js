import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    navigate("/login");
  } else {
    navigate("/dashboard");
  }
  return <div></div>;
};

export default HomeComponent;
