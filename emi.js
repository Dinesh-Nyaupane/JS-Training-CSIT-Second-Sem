// Calculate monthly EMI based on principal, annual interest rate, and tenure (years).
// Use parseFloat(), Math.pow(), and Math.round().

function emi(principal, interest, tenure) {
    // using formula
    let monthlyRate = interest / (12 * 100);
    let n = tenure * 12;
    let emi = principal * monthlyRate * Math.pow(1 + monthlyRate, n) / (Math.pow(1 + monthlyRate, n) - 1);
    return Math.round(emi);
}
const principal = parseFloat(prompt("Enter principal:"));
const interest = parseFloat(prompt("Enter interest:"));
const tenure = parseFloat(prompt("Enter the tenure (in years):"));
console.log(`Monthly EMI is: ${emi(principal, interest, tenure)}`)
