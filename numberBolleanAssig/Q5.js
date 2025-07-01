function calculateEMI(P, R, N) {
  P = parseFloat(P);
  R = parseFloat(R) / 12 / 100;
  N = parseFloat(N) * 12;
  let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  return `Monthly EMI is ${Math.round(emi)}`;
}
