import React from "react";
import { useState, useEffect } from "react";
import "./WeatherTime.css";
import PressureImg from "../../assets/PressureImg.png";
import WindImg from "../../assets/WindImg.png";
import HumidityImg from "../../assets/HumidityImg.png";

const WeatherTime = ({ fullDate, getTime }) => {
  const [apiData, setApiData] = useState();

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=40c861e7de3dd6ca8c9a1b2347be1793";

  async function fetchData() {
    try {
      let response = await fetch(url);
      let output = await response.json();
      if (response.ok) {
        setApiData(output);
        // console.log(output);
      }
    } catch {}
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="mainWeatherDiv">
      <div className="upperWeatherDiv">
        <p>{fullDate} </p>
        <p>{getTime} </p>
      </div>

      <div className="lowerWeatherDiv">
        {apiData !== undefined ? (
          <>
            <div className="leftLowerDiv">
              <img
                src={`https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
                alt=""
              />
              <p>{apiData.weather[0].description} </p>
            </div>

            <div className="barDiv">|</div>

            <div className="centerLowerDiv">
              <div className="tempDiv">
                {apiData.main.temp} <span>&deg;C</span>
              </div>
              <div className="pressureDiv">
                <div className="pressureLeft">
                  <img src={PressureImg} alt="" />
                </div>
                <div className="pressureRight">
                  <p>{apiData.main.pressure}&nbsp;mbar</p>
                  <p>Pressure</p>
                </div>
              </div>
            </div>

            <div className="barDiv">|</div>

            <div className="rightLowerDiv">
              <div className="windDiv">
                <div className="windLeft">
                  <img src={WindImg} alt="" />
                </div>
                <div className="windRight">
                  <p>{apiData.wind.speed}&nbsp;kmph</p>
                  <p>Wind</p>
                </div>
              </div>
              <div className="humidityDiv">
                <div className="humidityLeft">
                  <img src={HumidityImg} alt="" />
                </div>
                <div className="humidityRight">
                  <p>{apiData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>

            
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default WeatherTime;
