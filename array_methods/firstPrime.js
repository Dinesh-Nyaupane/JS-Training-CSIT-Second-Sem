prime = function isPrime(num) {
  if (num < 2) return false;        

  let count = 0;                    
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count === 2;               
}

const arr = [4, 6,7, 8, 11, 15];
const firstPrime = arr.find(prime);


  console.log(`First prime: ${firstPrime}`); 


