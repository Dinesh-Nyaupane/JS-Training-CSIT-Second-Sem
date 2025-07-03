// Calculate compound interest final amount.
function compoundInterest(p,r,n)
{
let amount=(p*Math.pow((1+r/100),n)).toFixed(2);
return amount;
}
let a=parseFloat("Enter Principle: ");
let b=parseFloat("Enter annual interest rate: ");
let c=parseFloat("Enter number of years: ");
console.log("The compound intereset final amount is: "+compoundInterest(a,b,c))