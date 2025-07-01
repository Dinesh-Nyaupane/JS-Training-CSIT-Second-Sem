function checkLoanEligibility(income, expenses) {
  const numIncome = Number(income);
  const numExpenses = Number(expenses);

  if (!isFinite(numIncome) || !isFinite(numExpenses) || numIncome < 0 || numExpenses < 0) return false;

  return numIncome > (3 * numExpenses);
}

console.log(checkLoanEligibility(9000, 2500));