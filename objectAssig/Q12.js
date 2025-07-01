function calculateBMI(weight, height) {
  const numWeight = Number(weight);
  const numHeight = Number(height);

  if (!isFinite(numWeight) || !isFinite(numHeight) || numWeight <= 0 || numHeight <= 0) return false;

  const bmi = numWeight / Math.pow(numHeight, 2);
  return "BMI calculated as " + bmi.toFixed(1);
}

console.log(calculateBMI(70, 1.75));