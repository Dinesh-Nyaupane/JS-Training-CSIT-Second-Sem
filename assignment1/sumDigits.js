let numInput = prompt("Enter a number");
function sumDigits(a) {
  let rem;
  let sum = 0;
  
  if (isNaN(a)==0&&a>=0) {
      while (a != 0) {
    rem = a % 10;
    sum = sum + rem;
    a = parseInt(a / 10);
  }
  return "The sum of numbers is "+sum;
  }
  else{
    return "Enter a valid number";
  }
}
console.log(sumDigits(numInput));
