function celsiusToFahrenheit(celsius) {
  const numCelsius = Number(celsius);
  if (!isFinite(numCelsius)) return false;

  const fahrenheit = (numCelsius * 9 / 5) + 32;
  return numCelsius + "°C equals " + fahrenheit.toFixed(1) + "°F";
}
console.log(celsiusToFahrenheit(37.5));