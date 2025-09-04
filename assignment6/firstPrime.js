// Problem: In a math tutoring tool, detect the first prime number from a user-entered array. Hint: Use .find() with a custom isPrime() function. Input: [4, 6, 8, 11, 15] Output: First prime: 11
const group = [4, 6, 8, 11, 15];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const primes = group.find(isPrime);
console.log(primes); 
