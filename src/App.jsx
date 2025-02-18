import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import DashboardLayout from "./pages/dashboard/Dashboard";


const isAuthenticated = () => {
  return localStorage.getItem("token");
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/DashboardLayout" element={<PrivateRoute element={<DashboardLayout />} />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
