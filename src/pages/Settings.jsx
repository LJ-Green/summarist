import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

const Settings = () => {
  return (
    <>
      <Sidebar />
      <SearchBar />
      <div className="settings-container">
        <p className="settings-header">Settings</p>
        <div className="settings-plan">
          <p className="plan-header">Your Subscription plan</p>
          <p className="plan">Basic</p>
          <button className="upgrade-button">Upgrade to Premium</button>
        </div>
        <p className="settings-email-header">Email</p>
        <p className="settings-email">guest@gmail.com</p>
      </div>
    </>
  );
};

export default Settings;
