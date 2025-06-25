// check whether odd or even
let input = prompt("enter a number");
let number=parseFloat(input);
if(isNaN(number)){
    alert("this is not a valid number");
}else{
    alert("you entered a number"+number);
}
let numbers=prompt("enter a number to check odd or even");
if(isNaN(numbers)){
    alert("invalid input!please enter a number");
}else{
    number=Number(numbers);
    if (number%2===0){
        alert("the number is even");
    }
    else{
        alert("the number is odd");
    }
}

// // checks greatest among 3
let num1=prompt("enter first number");
let num2=prompt("enter second number");
let num3=prompt("enter third number");

if (isNaN(num1)||isNaN(num2)||isNaN(num3)){
    alert("invalid input! please enter only numbers");
}else{
    num1=Number(num1);
    num2=Number(num2);
    num3=Number(num3);

    let greatest = num1;
    if(num2>greatest){
        greatest=num2;
    }
    if(num3>greatest){
        greatest=num3;
    }
    let smallest=num1;
    if(num2<smallest){
        smallest=num2;
    }
    if(num3<smallest){
        smallest=num3;
    }
    alert("greatest is"+greatest+"and smallest is"+smallest);
}


// check percentage
let marks = prompt("Enter your marks:");

if (isNaN(marks)) {
  alert("Invalid input! Please enter a number.");
} else {
  marks = Number(marks);
  if (marks >= 90 && marks <= 100) {
    alert("Grade A");
  } else if (marks >= 80 && marks <= 89) {
    alert("Grade B");
  } else if (marks >= 70 && marks <= 79) {
    alert("Grade C");
  } else if (marks >= 60 && marks <= 69) {
    alert("Grade D");
  } else if (marks < 60 && marks >= 0) {
    alert("Grade F");
  } else {
    alert("Invalid Marks");
  }
}
