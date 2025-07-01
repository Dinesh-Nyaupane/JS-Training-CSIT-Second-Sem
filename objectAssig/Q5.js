function calculateEMI(principal, rate, years) {
  const P = parseFloat(principal);
  const r = parseFloat(rate) / 100 / 12;
  const n = parseFloat(years) * 12;

  const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  return "Monthly EMI is " + Math.round(emi);
}
console.log(calculateEMI(500000, 8.5, 20));