function calculateFuelConsumption(distance, fuel) {
  const numDistance = Number(distance);
  const numFuel = Number(fuel);

  if (!isFinite(numDistance)) return false;
  if (!isFinite(numFuel) || numFuel <= 0) return false;

  const consumption = numDistance / numFuel;
  return "Fuel consumption is " + consumption.toFixed(2) + " km/l";
}console.log(calculateFuelConsumption(450, 35.5));