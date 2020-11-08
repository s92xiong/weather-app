import React from 'react';
import WeatherCardsMap from './WeatherCardsMap';

const WeatherCardSecondary = (props) => {
  return (
    <div className="weather-card-secondary">
      <WeatherCardsMap
        isUnitMetric={props.isUnitMetric}
        array={props.array}
        timezone={props.timezone}
      />
    </div>
  );
};

export default WeatherCardSecondary;