import React from 'react';
import getTimeByOffset from './getTimeByOffset';
import getWeatherIcon from './getWeatherIcon';
import calcTemp from './calcTemp';

const WeatherCardsMap = ({ array, isUnitMetric, timezone }) => {
  const getDayOfWeek = (index) => {
    const tomorrow = new Date(getTimeByOffset(timezone));
    tomorrow.setDate(tomorrow.getDate() + index + 1);
    return tomorrow.toString().split(' ')[0];
  };

  const getDateMMDD = (index) => {
    const tomorrow = new Date(getTimeByOffset(timezone));
    tomorrow.setDate(tomorrow.getDate() + index + 1);
    return tomorrow.toLocaleDateString([], { month: 'numeric', day: 'numeric' })
  };
  
  return array.map((element, index) => {
    if (index === 7) return null;
    return (
      <div key={index} className="small-weather-card">
        <div className="grid-row grid-row-odd">
          <h3>{getDayOfWeek(index)}</h3>
          <p className="month-day">{getDateMMDD(index)}</p>
        </div>
        <div className="grid-row">
          <img className="small-weather-icon" src={getWeatherIcon(element.weather[0].main)} alt=""/>
        </div>
        <div className="grid-row grid-row-odd">
          <p className="small-temperature">{calcTemp(isUnitMetric, element.temp.day)}°</p>
        </div>
        <div className="grid-row">
          <p className="small-feels_like-temperature">{calcTemp(isUnitMetric, element.feels_like.day)}°</p>
        </div>
        <div className="grid-row grid-row-odd">
          <p className="small-feels_like-temperature">
            <sup>/</sup>{calcTemp(isUnitMetric, element.feels_like.night)}°
          </p>
        </div>
      </div>
    );
  });
};

export default WeatherCardsMap;