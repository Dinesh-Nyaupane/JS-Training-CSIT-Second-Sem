/*
Problem 6: Game Scores with Bonus
Problem: In a gaming app, scores below 50 are disqualified. The rest get a 10-point bonus. Filter and adjust the scores. Hint: .filter() then .map(). Input: [30, 55, 70, 45, 90] Output: [65, 80, 100]




*/
function adjustGameScores(scores) {
    const validScores = scores.filter(score => score>= 50);
    const adjustedScores = validScores.map(score => score + 10);
    console.log("Adjusted Scores:" , adjustedScores);
}
const scores = prompt("Enter game score seperated by comas");
const scoreArray = scores.split(",").map(score => parseInt(score.trim(), 10));
adjustGameScores(scoreArray);
