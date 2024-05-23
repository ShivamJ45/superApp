import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import './Display.css'

const Display = () => {
  return (
    <div className="mainProfileDiv">
      <div className="contentDisplayDiv">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Display;
