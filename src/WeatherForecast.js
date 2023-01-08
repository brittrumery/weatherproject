import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[5]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `41a260f121coebc3t902bb88f6dc8373`;
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
