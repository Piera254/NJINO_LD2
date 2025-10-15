import React, { useEffect, useState } from "react";
import API from "../api";

const AOIList = () => {
  const [aois, setAois] = useState([]);

  useEffect(() => {
    API.get("/aoi")
      .then((res) => setAois(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="aoi-list">
      <h2>Saved AOIs</h2>
      {aois.length === 0 ? (
        <p>No AOIs saved yet.</p>
      ) : (
        <ul>
          {aois.map((aoi) => (<
            li key={aoi.id}>
              <strong>{aoi.name}</strong> — {aoi.latitude}, {aoi.longitude} ({aoi.size_km2} km²)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AOIList;
