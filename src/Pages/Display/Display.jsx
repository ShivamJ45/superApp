import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import WeatherTime from "../../Components/WeatherTimeDiv/WeatherTime";
import Notes from "../../Components/Notes/Notes";
import Timer from "../../Components/Timer/Timer";
import News from "../../Components/News/News";
import "./Display.css";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();

  const date = new Date();
  const fullDate =
    date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  const getTime =
    (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) +
    ":" +
    date.getMinutes() +
    " " +
    (date.getHours() > 12 ? "PM" : "AM");
  // console.log(getTime);

  return (
    <div className="mainDisplayDiv">
    <div className="mainProfileDiv">
      <div className="leftDisplayDiv">
        <div className="upperDisplayDiv">
          <div className="upperLeftDiv">
            <ProfileCard />
            <WeatherTime fullDate={fullDate} getTime={getTime} />
          </div>
          <div className="upperRightDiv">
            <Notes />
          </div>
        </div>
        <div className="lowerDisplayDiv">
          <Timer />
        </div>
      </div>

      <div className="rightDisplayDiv">
        <News />
      </div>
    </div>
    <button className="browseBtn" onClick={()=>{navigate("/browse");}}>Browse</button>
    </div>
  );
};

export default Display;
