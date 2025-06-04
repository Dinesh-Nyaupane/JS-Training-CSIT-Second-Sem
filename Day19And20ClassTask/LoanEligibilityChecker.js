// Loan Eligibility Checker
function checkLoan(numIncome, numExpense) {
  if (!isFinite(numIncome) || !isFinite(numExpense) || numIncome < 0 || numExpense < 0) return false;
  else return numIncome > (3 * numExpense);
}
let income=Number(prompt("Enter  Income:"));
let expense=Number(prompt("Enter Expense:"));
console.log(checkLoanEligibility("Loan eligibility: " + checkLoanEligibility(income,expense))); 