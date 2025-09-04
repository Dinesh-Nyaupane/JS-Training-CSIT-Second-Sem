const mark = Number(prompt("Enter your marks"));
function Grading(mark) {
  if (!isFinite(mark) || mark < 0 || mark > 100) {
    return Boolean(null);
  } else if (mark >= 80 ) {
    return "A";
  } else if (mark >= 60 ) {
    return "B";
  } else if (mark >= 40 ) {
    return "C";
  } else if (mark >= 20 ) {
    return "D";
  } else if (mark >= 0 ) {
    return "F";
  }
}
console.log(Grading(mark));
