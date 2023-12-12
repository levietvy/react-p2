// App.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardComponent from "./components/DashboardComponent";
import LoginComponent from "./components/LoginComponent";
import { loginSuccess } from "./actions/userAction";
import { useDispatch } from "react-redux";
import CreateQuestionComponent from "./components/CreateQuestionComponent";
import HomeComponent from "./components/HomeComponent";

import { Routes, Route, useNavigate } from "react-router-dom";
import QuestionComponent from "./components/QuestionComponent";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    // Check if the user is authenticated
    const storedUser = localStorage.getItem("user");

    if (isAuthenticated === false && storedUser) {
      // If not authenticated but user data is stored, dispatch login success
      const user = JSON.parse(storedUser);
      dispatch(loginSuccess(user));
    } else if (isAuthenticated === false) {
      // If not authenticated and no stored user data, redirect to login
      navigate("/login");
    }
  }, [isAuthenticated, dispatch, navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/dashboard" element={<DashboardComponent />} />
      <Route path="/answer/:questionId" element={<QuestionComponent />} />
      <Route path="/new" element={<CreateQuestionComponent />} />
    </Routes>
  );
};

export default App;
