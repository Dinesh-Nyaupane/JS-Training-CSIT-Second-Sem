function convertToFahrenheit(c) {
  return ((c * 9) / 5 + 32).toFixed(2);
}
let celcius = Number(prompt("enter celcius"));
if (isFinite(celcius)) {
  console.log(convertToFahrenheit(celcius));
} else {
  console.log("false");
}
