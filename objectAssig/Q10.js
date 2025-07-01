function calculateGrade(score) {
  const numScore = Number(score);
  if (!isFinite(numScore) || numScore < 0 || numScore > 100) return false;

  if (numScore >= 80) return "Score " + numScore + " corresponds to grade A";
  if (numScore >= 60) return "Score " + numScore + " corresponds to grade B";
  if (numScore >= 40) return "Score " + numScore + " corresponds to grade C";
  if (numScore >= 20) return "Score " + numScore + " corresponds to grade D";
  return "Score " + numScore + " corresponds to grade F";
}

console.log(calculateGrade(85)); 