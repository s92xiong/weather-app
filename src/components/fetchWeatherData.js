// api keys: cf47b6dd4ca968ac3f8ce6f14e9595da, 2f32bb4535de7ea7d76e39d2f2cbfbcc

const api = {
  key: "2f32bb4535de7ea7d76e39d2f2cbfbcc",
  currentWeatherData: "https://api.openweathermap.org/data/2.5/weather?q=",
  oneCall: "https://api.openweathermap.org/data/2.5/onecall?",
  exclude: "&exclude=current,minutely,hourly,alert"
}

const fetchWeatherData = async (setCurrentWeather, setForecast, cityName, setSearchFailed, setUserHasNotYetSearched) => {
  try {
    // Remove searchFailed UI, render normal UI
    setSearchFailed(false);

    setUserHasNotYetSearched(false);

    // Fetch data from api, convert it to an object, update weather object state
    const firstCall = await fetch(`${api.currentWeatherData}${cityName}&appid=${api.key}`, {mode:"cors"});
    const todaysWeather = await firstCall.json();
    setCurrentWeather(todaysWeather);
    // console.log(todaysWeather);

    // Obtain coordinates from todaysWeather to use it for the second API call
    const longitude =  todaysWeather.coord.lon;
    const latitude = todaysWeather.coord.lat;

    // Fetch data for 7 day forecast
    const secondCall = await fetch(`${api.oneCall}lat=${latitude}&lon=${longitude}${api.exclude}&appid=${api.key}`);
    const forecastData = await secondCall.json();
    setForecast(forecastData);
    // console.log(forecastData);

  } catch (error) {
    setSearchFailed(true);
  }
};

export default fetchWeatherData;