function validateAge(age) {
  const numAge = Number(age);
  return isFinite(numAge) && numAge >= 0 && numAge <= 120;
}

console.log(validateAge(25)); 