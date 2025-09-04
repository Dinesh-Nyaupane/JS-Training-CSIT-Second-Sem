// Calculate fuel consumption in km/l given distance traveled and fuel used.
function fuelConsumption(a, b) {
  if (isFinite(a) && isFinite(b)) {
    return a / b;
  } else {
    return "Enter valid data";
  }
}
let distTravelled = Number(prompt("Enter distance travelled"));
let fuelConsumed = Number(prompt("Enter fuel consumption"));
console.log(
  "The vehicle travels " +
    fuelConsumption(distTravelled, fuelConsumed).toFixed(2) +
    " Km/lt"
);
