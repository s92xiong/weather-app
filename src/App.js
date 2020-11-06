import { useState } from 'react';
import './styles/App.css';
import WeatherCardPrimary from './components/WeatherCardPrimary';
import fetchWeatherData from './components/fetchWeatherData';
import Navbar from './components/Navbar';

function App() {
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [metricUnit, setMetricUnit] = useState(true);

  const inputFieldChange = (e) => setCityName(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.input-city');
    if (cityName.length > 0) fetchWeatherData(setCurrentWeather, setForecast, cityName);
    setCityName("");
    inputField.value = "";
  };

  const unitChange = () => setMetricUnit(!metricUnit);
  
  return (
    <div className="App">
      <Navbar 
        onSubmit={handleSubmit}
        onChange={inputFieldChange}
        onClick={unitChange}
      />
      {
        (typeof currentWeather.main != "undefined") ?
        <div className="container">
          <WeatherCardPrimary
              cityName={currentWeather.name}
              country={currentWeather.sys.country}
              isUnitMetric={metricUnit}
              temperature={currentWeather.main.temp}
              feelsLike={currentWeather.main.feels_like}
              weatherStatus={currentWeather.weather[0].main}
          />
          
        </div>
        :
        <div className="main-weather-card">
          <h1>City not available</h1>
          <p className="something">{forecast.lat}</p>
        </div>
      }
    </div>
  );
}

export default App;