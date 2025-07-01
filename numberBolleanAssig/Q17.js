function isValidAge(age) {
  age = Number(age);
  return isFinite(age) && age >= 0 && age <= 120;
}
