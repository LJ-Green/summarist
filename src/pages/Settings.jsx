import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

const Settings = () => {
  const navigate = useNavigate(); // Get the navigation function

  // Handle the "Upgrade to Premium" button click
  const handleUpgradeClick = () => {
    navigate("/chooseplan"); // Send the user to the "ChoosePlan" page
  };

  return (
    <>
      <Sidebar activePage="Settings" />
      <SearchBar />
      <div className="settings-container">
        <p className="settings-header">Settings</p>
        <div className="settings-plan">
          <p className="plan-header">Your Subscription plan</p>
          <p className="plan">Basic</p>
          <button className="upgrade-button" onClick={handleUpgradeClick}>
            Upgrade to Premium
          </button>
        </div>
        <p className="settings-email-header">Email</p>
        <p className="settings-email">guest@gmail.com</p>
      </div>
    </>
  );
};

export default Settings;
