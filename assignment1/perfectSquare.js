let inputNum = parseInt(prompt("Enter a number"));
function isSquare(num) {
  let i = 1;
  while (i * i <= num) {
    if (i * i == num) {
      return "The number " + num + " is a perfect square of " + i;
    } else {
      i++;
    }
  }
  return "The The number " + num + " is not a perfect square";
}
console.log(isSquare(inputNum));
