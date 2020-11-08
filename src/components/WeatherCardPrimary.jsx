import React from 'react';
import calcTemp from './calcTemp';
import getTimeByOffset from './getTimeByOffset';
import getWeatherIcon from './getWeatherIcon';

const WeatherCardPrimary = ({cityName, country, isUnitMetric, temperature, feelsLike, weatherStatus, timezone}) => {
  const date = new Date(getTimeByOffset(timezone));
  const time = date.toLocaleDateString([], { 
    weekday: 'long', 
    hour: '2-digit', 
    minute: '2-digit', 
    month: 'numeric', 
    day: 'numeric', 
    hour12: false,
  });

  return (
    <div className="weather-card-primary">
      <div className="weather-card-primary-details">
        <h1 className="weather-card-primary-location">{cityName}, {country}</h1>
        <p className="weather-card-primary-date">as of {time}</p>
        <h1 className="temperature">
          {calcTemp(isUnitMetric, temperature)}
          {(isUnitMetric) ? <sup>°C</sup> : <sup>°F</sup>}
        </h1>
        <p>
          Feels like: {calcTemp(isUnitMetric, feelsLike)}
          {(isUnitMetric) ? "°C" : "°F"}
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