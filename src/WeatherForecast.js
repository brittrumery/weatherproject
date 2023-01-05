import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>{" "}
          <img
            className="WeatherForecast-Icon"
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="Sunny"
          />
          <div className="WeatherForecast-Description">Sunny</div>
          <div className="WeatherForecast-Temp">
            <span className="WeatherForecast-Temp-Max">19°</span>{" "}
            <span className="WeatherForecast-Temp-Min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
