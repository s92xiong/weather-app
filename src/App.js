import { useState } from 'react';
import './styles/App.css';
import './styles/AppMobile.css';
import fetchWeatherData from './components/fetchWeatherData';
import Navbar from './components/Navbar';
import WeatherCardPrimary from './components/WeatherCardPrimary';
import WeatherCardSecondary from './components/WeatherCardSecondary';

function App() {
  const [userHasNotYetSearched, setUserHasNotYetSearched] = useState(true);
  const [searchFailed, setSearchFailed] = useState(false);
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [metricUnit, setMetricUnit] = useState(true);
  const [forecast, setForecast] = useState({});

  const inputFieldChange = (e) => setCityName(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.input-city');
    if (cityName.length > 0) fetchWeatherData(setCurrentWeather, setForecast, cityName, setSearchFailed, setUserHasNotYetSearched);
    setCityName("");
    inputField.value = "";
  };

  const unitChange = () => setMetricUnit(!metricUnit);

  // Render UI below when page first loads
  if (userHasNotYetSearched) {
    return (
      <div className="App">
        <Navbar 
          onSubmit={handleSubmit}
          onChange={inputFieldChange}
          onClick={unitChange}
        />
        <div className="search-failed">
          <h1>Search city or location</h1>
          <br/>
          <p>To specify a country, use the two-letter abbreviation (Alpha-2 code) after a comma. e.g. Washington, US</p>
        </div>
      </div>
    );
  }

  // Render UI below if a search has failed
  if (searchFailed) {
    return (
      <div className="App">
        <Navbar 
          onSubmit={handleSubmit}
          onChange={inputFieldChange}
          onClick={unitChange}
        />
        <div className="search-failed">
          <h1>Location not available</h1>
          <br/>
          <p>To specify a country, use the two-letter abbreviation (Alpha-2 code) after a comma. e.g. Washington, US</p>
        </div>
      </div>
    );
  }
  
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