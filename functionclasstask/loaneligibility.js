function loanEligibility(number_store, expense_store) {
  let bool_false = false;
  let bool_true = true;
  if (
    !isNaN(number_store) &&
    !isNaN(expense_store) &&
    number_store > 0 &&
    expense_store > 0 &&
    number_store > 3 * expense_store
  ) {
    return bool_true;
  } else {
    return bool_false;
  }
}
let income = Number(prompt("Enter your income"));
let expense = Number(prompt("Enter your expense"));

console.log(loanEligibility(income, expense));
