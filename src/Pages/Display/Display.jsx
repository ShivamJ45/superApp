import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import WeatherTime from "../../Components/WeatherTimeDiv/WeatherTime";
import "./Display.css";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();

  const date = new Date();
  const fullDate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  const getTime = (date.getHours()>12 ? (date.getHours()-12) : date.getHours()) + ":" + (date.getMinutes()) + " " + (date.getHours()>12 ? "PM" : "AM");
  // console.log(getTime);

  return (
    <div className="mainProfileDiv">
      <div className="leftDisplayDiv">
        <div className="upperDisplayDIv">
          <div className="upperLeftDiv">
            <ProfileCard />
            <WeatherTime fullDate={fullDate} getTime={getTime} />
          </div>
          <div className="upperRightDiv"></div>
        </div>
        <div className="timerDiv"></div>
      </div>

      <div className="rightDisplayDiv"></div>
    </div>
  );
};

export default Display;
