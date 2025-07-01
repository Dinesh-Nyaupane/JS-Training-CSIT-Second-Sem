function checkSqrt(n) {
  n = Number(n);
  if (!isFinite(n) || n < 0) return false;
  return `Square root of ${n} is ${Math.sqrt(n)}`;
}
