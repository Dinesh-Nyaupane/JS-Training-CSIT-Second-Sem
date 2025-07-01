function grade(score) {
  score = Number(score);
  if (!isFinite(score) || score < 0 || score > 100) return false;
  if (score >= 80) return `Score ${score} corresponds to grade A`;
  if (score >= 60) return `Score ${score} corresponds to grade B`;
  if (score >= 40) return `Score ${score} corresponds to grade C`;
  if (score >= 20) return `Score ${score} corresponds to grade D`;
  return `Score ${score} corresponds to grade F`;
}
