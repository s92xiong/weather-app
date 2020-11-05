import { useState } from 'react';
import './App.css';
import ChangeUnit from './components/ChangeUnit';
import Input from './components/Input';
import { kelvinToCelsius, kelvinToFahrenheit } from './components/tempConversion';

// @sheuhxiong@gmail.com api key: cf47b6dd4ca968ac3f8ce6f14e9595da
// @sheuhxiong@live.com api key: 2f32bb4535de7ea7d76e39d2f2cbfbcc

const api = {
  key: "2f32bb4535de7ea7d76e39d2f2cbfbcc",
  baseURL: "http://api.openweathermap.org/data/2.5/weather?q=",
}

function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});
  const [metricUnit, setMetricUnit] = useState(true);

  const getDataAsync = async () => {
    try {
      const response = await fetch(`${api.baseURL}${cityName}&appid=${api.key}`, {mode:"cors"});
      const weatherData = await response.json();
      setWeather(weatherData);
      setCityName("");
      console.log(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  const inputFieldChange = (e) => setCityName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.input-city');
    if (inputField.value.length > 0) {
      getDataAsync();
    }
    inputField.value = "";
  };

  const unitChange = () => {
    setMetricUnit(!metricUnit);
  };

  const determineSymbol = () => (metricUnit) ? "°C" : "°F"; 

  if (typeof weather.main != "undefined") {
    return (
      <div className="App">
        <Input onSubmit={handleSubmit} onChange={inputFieldChange} className="input-city" />
        <ChangeUnit onClick={unitChange} />
        <h1>{weather.name}, {weather.sys.country}</h1>
        <h1>Temperature: {(metricUnit) ? kelvinToCelsius(weather.main.temp) : kelvinToFahrenheit(weather.main.temp)} {determineSymbol()}</h1>
        <h1>Feels Like: {(metricUnit) ? kelvinToCelsius(weather.main.feels_like) : kelvinToFahrenheit(weather.main.feels_like)} {determineSymbol()}</h1>
        <h1>{weather.weather[0].main}</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Input onSubmit={handleSubmit} onChange={inputFieldChange} className="input-city" />
      <ChangeUnit onClick={unitChange} />
      <h1>City not available</h1>
    </div>
  );
}

export default App;