import React from 'react';
import { kelvinToCelsius, kelvinToFahrenheit } from './convertTemperature';
import getWeatherIcon from './getWeatherIcon';

const WeatherCardPrimary = ({cityName, country, isUnitMetric, temperature, feelsLike, weatherStatus}) => {
  const date = new Date();
  const time = date.toLocaleDateString([], { 
    weekday: 'long', 
    hour: '2-digit', 
    minute: '2-digit', 
    month: 'numeric', 
    day: 'numeric', 
    hour12: false,
  });

  return (
    <div className="main-weather-card">
      <div className="main-weather-card-details">
        <h1 className="main-weather-card-location">{cityName}, {country}</h1>
        <p className="main-weather-card-date">as of {time}</p>
        <h1 className="temperature">
          {(isUnitMetric) ? 
            kelvinToCelsius(temperature) : 
            kelvinToFahrenheit(temperature)
          }{(isUnitMetric) ? <sup>°C</sup> : <sup>°F</sup>}
        </h1>
        <p>
          Feels like: {(isUnitMetric) ? 
            kelvinToCelsius(feelsLike) : 
            kelvinToFahrenheit(feelsLike)
          } {(isUnitMetric) ? "°C" : "°F"}
        </p>
        <h2>{weatherStatus}</h2>
      </div>
      <div className="icon-div">
        <img className="icon-image" src={getWeatherIcon(weatherStatus)} alt=""/>
      </div>
    </div>
  );
};

export default WeatherCardPrimary;