import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>{" "}
      <img
        className="WeatherForecast-Icon"
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
      />
      <div className="WeatherForecast-Description text-capitalize">
        {props.data.condition.description}
      </div>
      <div className="WeatherForecast-Temp">
        <span className="WeatherForecast-Temp-Max">{maxTemperature()}</span>{" "}
        <span className="WeatherForecast-Temp-Min">{minTemperature()}</span>
      </div>
    </div>
  );
}
