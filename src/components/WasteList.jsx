import React, { useState, useEffect } from "react";
import axios from "axios";

const WasteList = () => {
  const [wasteData, setWasteData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/waste")
      .then((response) => setWasteData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="waste-list">
      <h2>Waste Records</h2>
      <ul>
        {wasteData.map((waste) => (
          <li key={waste.id}>
            {waste.type} - {waste.volume} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WasteList;
