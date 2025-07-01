// Calculate fuel consumption in km/l given distance traveled and fuel used.
// Sample Input:
// Distance: 450, Fuel: 35.5

// Sample Output:
// Fuel consumption is 12.68 km/l
// Vehicle runs 12.68 km per liter of fuel.





function fuelconsumption(distance, fuel) {
	// Returns fuel consumption in km/l
	return distance / fuel;
}
// example usuage
const fuel = Number(prompt("Enter fuel consumption"));
const distance = Number(prompt("Enter the total distance"));
console.log (`Fuel consumption is ${fuelconsumption(distance, fuel).toFixed(2)} km/l`);
console.log (`Vehicle runs ${fuelconsumption(distance, fuel).toFixed(2)} km per liter of fuel.`);
