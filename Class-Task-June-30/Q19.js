let numbers = [4, 6, 8, 11, 15];
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
  {
    if (num % i === 0) return false;
  }
  return true;
}
let firstPrime = numbers.find(isPrime);
console.log(`First prime: ${firstPrime}`);
