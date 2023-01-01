import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="tempElement">
        {Math.round(props.fahrenheit)}
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={convertToCelsius}>
            {" "}
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="tempElement">
        {Math.round(celsius())}
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
