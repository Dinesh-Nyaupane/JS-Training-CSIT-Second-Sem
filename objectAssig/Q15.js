function calculateTempDifference(temp1, temp2) {
  const num1 = Number(temp1);
  const num2 = Number(temp2);

  if (!isFinite(num1) || !isFinite(num2)) return false;

  const diff = Math.abs(num1 - num2);
  return "Temperature difference is " + diff.toFixed(1);
}

console.log(calculateTempDifference(25.4, 30.9));