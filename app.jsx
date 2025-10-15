import React, { useState } from "react";
import AOIForm from "./components/AOIForm";
import AOIList from "./components/AOIList";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="app-container">
      <h1>🌱 ReGreen: Soil Degradation Detector</h1>
      <div className="grid">
        <AOIForm onAOICreated={() => setRefresh(!refresh)} />
        <AOIList key={refresh} />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
