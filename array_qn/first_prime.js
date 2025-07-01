let array = [4, 6, 8, 11, 15];
console.log(`${array.find(isPrimeCheck)}`);
function isPrimeCheck(value) {
  if (value === 2) {
    return true;
  } else {
    let primeindex = true;
    for (let i = 2; i <= value / 2; i++) {
      if (value % i == 0) {
        return false;
      }
    }
    return true;
  }
}
