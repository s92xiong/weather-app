function kelvinToCelsius(kelvin) {
  let celsius = Math.round(kelvin - 273.15);
  return celsius;
}

function kelvinToFahrenheit(kelvin) {
  let celsius = kelvin - 273.15;
  let fahrenheit = Math.round((9 / 5 * celsius) + 32);
  return fahrenheit;
}

function calcTemp(bool, kelvin) {
  let value;
  if (bool) {
    value = kelvinToCelsius(kelvin);
  } else {
    value = kelvinToFahrenheit(kelvin);
  }
  return value;
}

export default calcTemp;