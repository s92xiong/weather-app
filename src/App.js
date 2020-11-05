import { useState } from 'react';
import './App.css';
import ToggleUnit from './components/ToggleUnit.jsx';
import Input from './components/Input.jsx';
import TodaysWeather from './components/TodaysWeather';
import fetchWeatherData from './components/fetchWeatherData';

function App() {
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState({}); 
  const [metricUnit, setMetricUnit] = useState(true);

  const inputFieldChange = (e) => setCityName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.input-city');
    if (inputField.value.length > 0) {
      fetchWeatherData(setCurrentWeather, setForecast, cityName);
    }
    setCityName("");
    inputField.value = "";
  };

  const unitChange = () => {
    setMetricUnit(!metricUnit);
  };

  if (typeof currentWeather.main != "undefined") {
    return (
      <div className="App">
        <Input onSubmit={handleSubmit} onChange={inputFieldChange} className="input-city" />
        <ToggleUnit onClick={unitChange} />
        <TodaysWeather
          cityName={currentWeather.name}
          country={currentWeather.sys.country}
          isUnitMetric={metricUnit}
          temperature={currentWeather.main.temp}
          feelsLike={currentWeather.main.feels_like}
          weatherStatus={currentWeather.weather[0].main}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Input onSubmit={handleSubmit} onChange={inputFieldChange} className="input-city" />
      <ToggleUnit onClick={unitChange} />
      <h1>City not available</h1>
    </div>
  );
}

export default App;