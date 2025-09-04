// In a gaming app, scores below 50 are disqualified. The rest get a 10-point bonus. Filter and adjust the scores. Hint: .filter() then .map(). Input: [30, 55, 70, 45, 90] Output: [65, 80, 100]
let score = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(score.filter((newScore) => newScore >= 50).map((bonus) => bonus + 10));