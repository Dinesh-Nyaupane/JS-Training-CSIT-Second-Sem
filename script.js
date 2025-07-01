// Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

function integer() {
    // Return a random integer from 1 to 6
    return Math.ceil(Math.random() * 6) + 1;
}
// checking
// Example usage:
const num = parseInt(prompt("Enter a number between 1 to 6"));
console.log(`Simulating ${num}: rolled ${integer()}`);