function calculateSquareRoot(number) {
  const num = Number(number);
  if (isNaN(num) || num < 0) return false;

  const sqrt = Math.sqrt(num);
  return "Square root of " + num + " is " + sqrt;
}

console.log(calculateSquareRoot(16));