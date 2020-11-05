import React from 'react';
import { kelvinToCelsius, kelvinToFahrenheit } from './tempConversion';

const TodaysWeather = ({cityName, country, isUnitMetric, temperature, feelsLike, weatherStatus}) => {
  return (
    <div className="todays-weather">
      <h1>{cityName}, {country}</h1>
      <h1>
        {(isUnitMetric) ? 
          kelvinToCelsius(temperature) : 
          kelvinToFahrenheit(temperature)
        } {(isUnitMetric) ? "°C" : "°F"}
      </h1>
      <h1>
        Feels like: {(isUnitMetric) ? 
          kelvinToCelsius(feelsLike) : 
          kelvinToFahrenheit(feelsLike)
        } {(isUnitMetric) ? "°C" : "°F"}
      </h1>
      <h1>{weatherStatus}</h1>
    </div>
  );
};

export default TodaysWeather;