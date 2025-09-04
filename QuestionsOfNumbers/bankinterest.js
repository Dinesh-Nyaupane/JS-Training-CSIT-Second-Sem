let p=parseFloat(prompt("enter the principle:"));
let r=parseFloat(prompt("enter the rate:"));
let n=parseFloat(prompt("enter the number of years:"));
let Amount=p*Math.pow(1+(r/100),n);
console.log(Amount.toFixed(2));