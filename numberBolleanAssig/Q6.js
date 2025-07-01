function cToF(celsius) {
  celsius = Number(celsius);
  if (!isFinite(celsius)) return false;
  let f = celsius * 9/5 + 32;
  return `${celsius}°C equals ${f.toFixed(1)}°F`;
}
