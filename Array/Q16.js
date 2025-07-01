function countFrequency(arr, target) {
    return arr.filter(score => score === target).length;
}

// Example usage
let feedbackScores = [5, 2, 5, 6, 5];
let targetScore = 5;

let result = countFrequency(feedbackScores, targetScore);
console.log(`${targetScore} occurs ${result} times`);
