function fuelConsumption(distance, fuel) {
  distance = Number(distance);
  fuel = Number(fuel);
  if (!isFinite(distance) || !isFinite(fuel) || fuel <= 0) return false;
  let consumption = distance / fuel;
  return `Fuel consumption is ${consumption.toFixed(2)} km/l`;
}
