let principal = +prompt("enter principal amount");
let interest = (+prompt("enter interest rate"))/12/100;
let years = (+prompt("enter no of years"))*12;


let amount =(principal*interest*((1+interest)**years))/(((1+interest)**years)-1);

amount = Math.round(amount);
console.log(`Monthly EMI is ${amount}`)