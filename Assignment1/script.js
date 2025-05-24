// Function to check even numbers (returns true for even, false for odd)
function isEven(a) {
    return a % 2 === 0;
}

// Taking number from user
let num = parseInt(prompt("Enter any valid positive number"));

// Validating user input
if (isNaN(num)) {
    alert("Please enter a valid number.");
} else {
    if (isEven(num)) {
        alert("The number is even.");
    } else {
        alert("The given number is odd.");
    }
}
