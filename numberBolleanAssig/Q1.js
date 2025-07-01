function calculateCircleArea() {
  let radius = Number(prompt("Enter radius:"));
  if (!isFinite(radius) || radius <= 0) return false;
  let area = Math.PI * Math.pow(radius, 2);
  return `Area of circle with radius ${radius} is ${area.toFixed(2)}`;
}
