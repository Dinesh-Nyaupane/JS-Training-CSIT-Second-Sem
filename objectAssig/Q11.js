function calculateCompoundInterest(principal, rate, years) {
  const p = parseFloat(principal);
  const r = parseFloat(rate) / 100;
  const n = parseFloat(years);

  const amount = p * Math.pow(1 + r, n);
  return "Final amount after " + n + " years at " + rate + "% is " + amount.toFixed(2);
}

console.log(calculateCompoundInterest(10000, 5, 3));