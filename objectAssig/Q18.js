function convertUSDToEUR(usd) {
  const rate = 0.915;
  const numUSD = Number(usd);
  if (!isFinite(numUSD) || numUSD < 0) return false;

  const eur = numUSD * rate;
  return numUSD + " USD equals " + eur.toFixed(2) + " EUR";
}

console.log(convertUSDToEUR(100));