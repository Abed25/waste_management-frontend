import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import ManagerDashboard from "./components/Dashboard/ManagerDashboard.jsx";
import StaffDashboard from "./components/Dashboard/StaffDashboard.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Conditional routing based on user role */}
      <Route
        path="/admin"
        element={
          user.role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/manager"
        element={
          user.role === "manager" ? (
            <ManagerDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/staff"
        element={
          user.role === "staff" ? <StaffDashboard /> : <Navigate to="/login" />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          user.isAuthenticated ? (
            <Navigate to={`/${user.role}`} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
