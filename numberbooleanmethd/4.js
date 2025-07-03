// Calculate fuel consumption in km/l given distance traveled and fuel used.

function fuelConsumption(a,b)
{
    if(isFinite(a,b)){
        let consumption=(a/b).toFixed(2);
        return consumption;
    }
}
let c=parseFloat(prompt("Enter Distance Travelled: "));
let d=parseFloat(prompt("Enter Fuel Ussage: "));
console.log("Distance Travelled: "+c);
console.log("Fuel Usage: "+d)
console.log("Vehicle runs "+fuelConsumption(c,d)+" km per liter of fuel.")

