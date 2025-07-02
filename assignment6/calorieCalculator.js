// Problem: In a fitness tracking app, calculate the total calorie intake from a list of food items consumed. Hint: Use .reduce(). Input: [300, 450, 500] Output: Total calories: 1250
const calorie = [300, 450, 500];
console.log(calorie.reduce((sum, value) => sum + value));
