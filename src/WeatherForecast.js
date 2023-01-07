import axios from "axios";
import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `41a260f121coebc3t902bb88f6dc8373`;
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;

  axios.get(apiURL).then(handleResponse);

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
