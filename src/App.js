import { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/AppMobile.css';
import fetchWeatherData from './components/fetchWeatherData';
import Navbar from './components/Navbar';
import WeatherCardPrimary from './components/WeatherCardPrimary';
import WeatherCardSecondary from './components/WeatherCardSecondary';
import SearchFailed from './components/SearchFailed';

function App() {
  const [userHasNotYetSearched, setUserHasNotYetSearched] = useState(true);
  const [searchFailed, setSearchFailed] = useState(false);
  const [metricUnit, setMetricUnit] = useState(true);
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState({});

  // eslint-disable-next-line no-unused-vars
  const [bg, setBg] = useState();

  const inputFieldChange = (e) => setCityName(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputField = document.querySelector('.input-city');
    if (cityName.length > 0) fetchWeatherData(setCurrentWeather, setForecast, cityName, setSearchFailed, setUserHasNotYetSearched);
    setCityName("");
    inputField.value = "";
  };

  const unitChange = () => setMetricUnit(!metricUnit);

  // eslint-disable-next-line no-unused-vars
  const updateBg = (weatherStatus) => {
    // eslint-disable-next-line no-unused-vars
    let arrayOfIcons = ["Clear", "Clouds", "Drizzle", "Rain", "Thunderstorm", "Snow", "Mist", "Fog", "Haze"];

    if (weatherStatus === "Clear") {
      setBg("red");
    } else if (weatherStatus === "Clouds") {
      setBg("green");
    } else if (weatherStatus === "Drizzle" || weatherStatus === "Rain" || weatherStatus === "Thunderstorm") {
      setBg("blue");
    } else if (weatherStatus === "Snow") {
      setBg("pink");
    } else if (weatherStatus === "Mist" || weatherStatus === "Fog" || weatherStatus === "Haze") {
      setBg("yellow");
    }
  };

  useEffect(() => {
    if (currentWeather.weather) {
      updateBg(currentWeather.weather[0].main);
    }
  }, [currentWeather]);

  // Render UI below when page first loads
  if (userHasNotYetSearched) {
    return (
      <div className="App App-0">
        <Navbar onChange={inputFieldChange} onClick={unitChange} onSubmit={handleSubmit}
        />
        <SearchFailed header="Search city or location" />
      </div>
    );
  }

  // Render UI below if a search has failed
  if (searchFailed) {
    return (
      <div className="App App-1">
        <Navbar onChange={inputFieldChange} onClick={unitChange} onSubmit={handleSubmit} />
        <SearchFailed header="Location not available" />
      </div>
    );
  }

  if (!currentWeather && !forecast) {
    return <></>;
  }
  
  return (
    <div className="App" style={{
      backgroundColor: `${bg}`
    }}>
      <Navbar onChange={inputFieldChange} onClick={unitChange} onSubmit={handleSubmit} />
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
          <div className="empty-container"></div>
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