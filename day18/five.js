// Calculate monthly EMI based on principal, annual interest rate, and tenure (years).

let p=parseFloat(prompt("Enter Principal: "));
let r=parseFloat(prompt("Enter Rate: "));
let t=parseFloat(prompt("Enter Tenure: "));
function monthlyEmi(a,b,c)
{
    let rate=(b/(12*100));
    let EMI=Math.round((a*rate*Math.pow((1+rate),n))/(Math.pow((1+rate),n)-1));
 return EMI;
}
console.log("Monthly EMI is: "+monthlyEmi(p,r,t))