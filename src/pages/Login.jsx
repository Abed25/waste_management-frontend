import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role) {
      login(role); // Call login function with selected role
      navigate(`/${role}`); // Redirect to the respective dashboard
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="staff">Staff</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
