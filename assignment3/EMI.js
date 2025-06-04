// Calculate monthly EMI based on principal, annual interest rate, and tenure (years).
// function compAmount(p,r,n,t){
//     let r = parseFloat.parseFloat(r/100);
//     return Math.pow(p*(1+(r/n)),n*t);
// }
// function compINTEREST(p,r,n,t){
//     return compAmount(p,r,n,t)-p;
// }
// let Pr=Number(prompt("Enter principle amount"));
// let Ra=Number(prompt("Enter interest rate"));
// let Nu = 1;
// let Te = Number(prompt("Enter Time tenure"));
// console.log("Your compound interest this Month is " + compINTEREST(Pr,Ra,Nu,Te));

function calculateEMI(principal, annualRate, tenureYears) {
    let monthlyRate = annualRate / 12 / 100;
    let numberOfPayments = tenureYears * 12;

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
              (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return emi;
}

let Pr = Number(prompt("Enter principal amount"));
let Ra = Number(prompt("Enter annual interest rate in %"));
let Te = Number(prompt("Enter tenure in years"));

let monthlyEMI = calculateEMI(Pr, Ra, Te);
console.log("Your monthly EMI is: Rs " + monthlyEMI.toFixed(2));
