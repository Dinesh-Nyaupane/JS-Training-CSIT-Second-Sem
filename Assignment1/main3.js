// // 1. 🟢 Area of Circle Calculator
// // Problem:
// // Create a function that prompts the user for the radius of a circle, validates the input as a finite positive number, then calculates and returns the area of the circle rounded to 2 decimal places.

// function circleArea(radius) {
//     if (isFinite(radius)) {
//         let area = Math.PI * Math.pow(radius, 2);

//         return "Area of circle is " + area.toFixed(2);
//     } else {
//         return "enter valid number";
//     }
// }
// let radius = Number(prompt("enter radius"));
// console.log(circleArea(radius));

// // 2. 🔐 OTP Generator (6-digit, No Leading Zeros)
// // Problem:
// // Create a function that generates a 6-digit OTP as a number, ensuring no leading zeros.

// function otpGenerator(){
//     let otp=Math.floor(100000+Math.random()*900000);
//     return "coupon code generated" + otp;
// }
// console.log(otpGenerator())

// 3. 🎲 Dice Roll Simulator
// Problem:
// Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

// function diceRoll(){
//     let dice=Math.ceil(Math.random()*6)
//     return dice;
// }
// console.log(diceRoll())

// 4. ⛽ Fuel Consumption Calculator
// Problem:
// Calculate fuel consumption in km/l given distance traveled and fuel used.

// function fuelConsumption(dis,ful){
// if (isFinite(dis) || isFinite(ful) || ful > 0 ){
//     let milage= dis / ful ;
//     let total = milage.toFixed(2);
//     return total;
//   }
// else{
//     return console.log("please enter valid data");
// }

// }
// let Distance=Number(prompt("enter distance covered"))
// let Fuel=Number(prompt("enter  fuel consumption"))
// console.log(fuelConsumption(Distance,Fuel))

// 5. 💰 Loan EMI Calculator
// Problem:
// Calculate monthly EMI based on principal, annual interest rate, and tenure (years).

function monthlyEmi(principal, rate, year) {
  const p = parseFloat(principal);
  const r = parseFloat(rate / 12 / 100);
  const n = parseFloat(year * 12);

  let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return "Monthly EMI is" + Math.round(emi);
}
console.log(monthlyEmi(500000, 8.5, 20));

// 6. 🌡️ Temperature Converter with Validation
// Problem:
// Convert Celsius temperature to Fahrenheit with input validation.

