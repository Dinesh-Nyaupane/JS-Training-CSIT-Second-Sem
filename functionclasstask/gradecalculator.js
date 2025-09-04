let gradeCalculator = (score) => {
  return score >= 80 && score <= 100
    ? "A"
    : score >= 60 && score <= 79
    ? "B"
    : score >= 40 && score <= 59
    ? "C"
    : score >= 20 && score <= 39
    ? "D"
    : score >= 0 && score <= 19
    ? "F"
    : bool_primitive;
};
let bool_primitive = false;
console.log(gradeCalculator(20));
