let distance=Number(prompt("enter the distance travelled:"));
let fuel=Number(prompt("enter the amount of fuel"));
if(isFinite(distance) && isFinite(fuel))
{
    var fuelconsumed=(distance/fuel).toFixed(2);
}
else
{
    console.log("enter valid input");
}
console.log("The amount of fuel consumed is"+fuelconsumed);