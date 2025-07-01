function calculateBMI(weight, height) {
  weight = Number(weight);
  height = Number(height);
  if (!isFinite(weight) || !isFinite(height) || height <= 0) return false;
  let bmi = weight / Math.pow(height, 2);
  return `BMI calculated as ${bmi.toFixed(1)}`;
}
