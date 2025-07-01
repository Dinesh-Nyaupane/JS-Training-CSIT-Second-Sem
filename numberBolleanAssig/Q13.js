function maxTransaction(a, b, c) {
  let amounts = [parseFloat(a), parseFloat(b), parseFloat(c)].filter(v => !isNaN(v));
  if (amounts.length === 0) return false;
  return `Maximum valid transaction amount is ${Math.max(...amounts)}`;
}
