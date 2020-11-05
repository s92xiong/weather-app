function kelvinToCelsius(kelvin) {
  let celsius = Math.round(kelvin - 273.15);
  return celsius;
}

function kelvinToFahrenheit(kelvin) {
  let celsius = kelvin - 273.15;
  let fahrenheit = Math.round((9 / 5 * celsius) + 32);
  return fahrenheit;
}

export {kelvinToCelsius, kelvinToFahrenheit};