let distance = +prompt("enter distance traveled")
let fuel = +prompt("enter fuel consumtion")


let ans = (distance/fuel).toFixed(2);

console.log(`Fuel consumption is ${ans}km/l`)