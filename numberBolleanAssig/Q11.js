function compoundInterest(P, r, n) {
  P = parseFloat(P);
  r = parseFloat(r) / 100;
  n = parseFloat(n);
  let A = P * Math.pow(1 + r, n);
  return `Final amount after ${n} years at ${r * 100}% is ${A.toFixed(2)}`;
}
