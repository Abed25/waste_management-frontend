import React, { createContext, useState, useContext } from "react";

// Create AuthContext
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider to wrap the app and provide auth state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "admin", // Roles could be 'admin', 'manager', 'staff'
    isAuthenticated: true, // Assuming user is logged in
  });

  const login = (role) => {
    setUser({ role, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ role: "", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
