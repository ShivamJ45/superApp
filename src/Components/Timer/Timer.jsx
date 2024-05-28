import React from "react";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState(false);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      remainingTime = duration;
      return <div className="circleTimer">Time up</div>;
    }
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="circleTimer">
        <div className="timerValue">
          {hours < 10 ? "0" + hours : hours}:
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
      </div>
    );
  };

  return (
    <div className="mainTimerDiv">
      <div className="circleDiv">
        <CountdownCircleTimer
        className="countdownCircle"
          isPlaying
          key={start}
          duration={duration}
          colors={["#FF6A6A"]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      <div className="timerValueDiv">
        <div className="durationDiv">
          <div className="hoursDiv">
            <p className="timeHeading"> Hours</p>
            <i
              className="upTheTime fa-solid fa-play"
              onClick={() => {
                setHours(hours + 1);
              }}
            ></i>
            <h2 className="actualTime">{hours < 10 ? "0" + hours : hours}</h2>
            <i
              className="downTheTime fa-solid fa-play"
              onClick={() => {
                setHours(hours < 1 ? 0 : hours - 1);
              }}
            ></i>
          </div>

          {/* <span>:</span> */}

          <div className="minutesDiv">
            <p className="timeHeading">Minutes</p>
            <i
              className="upTheTime fa-solid fa-play"
              onClick={() => {
                setMinutes(minutes + 1);
              }}
            ></i>
            <h2 className="actualTime">{minutes < 10 ? "0" + minutes : minutes}</h2>
            <i
              className="downTheTime fa-solid fa-play"
              onClick={() => {
                setMinutes(minutes < 1 ? 0 : minutes - 1);
              }}
            ></i>
          </div>

          {/* <span>:</span> */}

          <div className="secondsDiv">
            <p className="timeHeading">Seconds</p>
            <i
              className="upTheTime fa-solid fa-play"
              onClick={() => {
                setSeconds(seconds + 1);
              }}
            ></i>
            <h2 className="actualTime">{seconds < 10 ? "0" + seconds : seconds}</h2>
            <i
              className="downTheTime fa-solid fa-play"
              onClick={() => {
                setSeconds(seconds < 1 ? 0 : seconds - 1);
              }}
            ></i>
          </div>
        </div>

        <div className="startDiv">
          {start ? (
            <button onClick={()=>{
              setDuration(0);
              setStart(false);
            }}>
              Stop
            </button>
          ):(<button onClick={()=>{
            let tempDuration=0;
            tempDuration+=seconds;
            tempDuration+=minutes*60;
            tempDuration+=hours*60*60;
            setDuration(tempDuration);
            setStart(true);
          }}>Start</button> )
          }
        </div>
      </div>
    </div>
  );
};

export default Timer;
