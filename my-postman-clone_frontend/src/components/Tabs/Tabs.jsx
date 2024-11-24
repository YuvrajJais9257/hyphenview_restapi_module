import React from 'react'
import "./Tabs.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
    {["params", "authorization", "headers", "body"].map((tab) => (
      <button
        key={tab}
        className={`tab ${activeTab === tab ? "active" : ""}`}
        onClick={() => setActiveTab(tab)}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
  )
}

export default Tabs
