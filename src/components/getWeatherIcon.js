import weatherIcons from './importWeatherIcons';

const getWeatherIcon = (weatherIcon) => {
  let arrayOfIcons = ["Clear", "Clouds", "Drizzle", "Rain", "Thunderstorm", "Snow", "Mist", "Fog", "Haze"];
  let description = weatherIcon.toString();

  let index;
  arrayOfIcons.map((element, i) => {
    if (element === description) {
      index = i;
    }
    return null;
  });

  return weatherIcons[index];
};

export default getWeatherIcon;