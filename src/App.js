import { useState } from 'react';
import './styles/App.css';
import './styles/AppMobile.css';
import fetchWeatherData from './components/fetchWeatherData';
import Navbar from './components/Navbar';
import WeatherCardPrimary from './components/WeatherCardPrimary';
import WeatherCardSecondary from './components/WeatherCardSecondary';

function App() {
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [metricUnit, setMetricUnit] = useState(true);
  const [forecast, setForecast] = useState({});

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
      <div className="container">
        {
          (typeof currentWeather.main !== "undefined") ?
          <WeatherCardPrimary
            cityName={currentWeather.name}
            country={currentWeather.sys.country}
            isUnitMetric={metricUnit}
            temperature={currentWeather.main.temp}
            feelsLike={currentWeather.main.feels_like}
            weatherStatus={currentWeather.weather[0].main}
            timezone={currentWeather.timezone}
          />
          :
          <div className="fake-container">
            <h1>City Unavailable</h1>
          </div>
        }
        {
          (typeof forecast.daily !== "undefined") ?
          <WeatherCardSecondary
            isUnitMetric={metricUnit}
            array={forecast.daily}
            timezone={currentWeather.timezone}
          />
          :
          <div></div>
        }
      </div>
    </div>
  );
}

export default App;