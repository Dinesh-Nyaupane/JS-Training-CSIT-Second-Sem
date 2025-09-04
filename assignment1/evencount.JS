let numOne = parseInt(prompt("Enter the first number"));
let numTwo = parseInt(prompt("Enter the second number"));
function evenNumbers(Low, high) {
  console.log("The even numbers are:");
  for (let i = Low; i <= high; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumbers(numOne, numTwo);
