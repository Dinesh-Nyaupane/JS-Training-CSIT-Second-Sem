function loanEligibility(income, expenses) {
  income = Number(income);
  expenses = Number(expenses);
  if (!isFinite(income) || !isFinite(expenses)) return false;
  return income > 3 * expenses;
}
