function calculateCircleArea(radius) {
  const numRadius = Number(radius);
  if (!isFinite(numRadius)) return false;
  if (numRadius <= 0) return false;

  const area = Math.PI * Math.pow(numRadius, 2);
  return "Area of circle with radius " + numRadius + " is " + area.toFixed(2);
}console.log(calculateCircleArea(7));