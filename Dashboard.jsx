import React, { useEffect, useState } from "react";
import API from "../api";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/dashboard/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!stats) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h2>ReGreen System Overview</h2>
      <p>Total AOIs: {stats.total_aois}</p>
      <p>Average Size: {stats.average_size_km2} km²</p>
      <p>Degraded Area: {stats.avg_degraded_pct}%</p>
      <p>Status: {stats.status}</p>
    </div>
  );
  };

export default Dashboard;
