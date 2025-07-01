function usdToEur(usd) {
  usd = Number(usd);
  if (!isFinite(usd)) return false;
  let eur = usd * 0.915;
  return `${usd} USD equals ${eur.toFixed(2)} EUR`;
}
