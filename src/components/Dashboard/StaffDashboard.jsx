import React from "react";
import WasteList from "../WasteList.jsx";

const StaffDashboard = () => {
  return (
    <div>
      <h2>Staff Dashboard</h2>
      <p>Welcome, Staff. You can view waste records assigned to you.</p>
      <WasteList />
    </div>
  );
};

export default StaffDashboard;
