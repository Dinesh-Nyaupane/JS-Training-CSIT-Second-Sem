
//function to check odd/even that returns true for even and false for odd.
function oddEvenChecker(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false
    }
}

//taking number from user
let num = parseInt(prompt("Enter any valid positive number"));

//initially checking is the input is a number or not
if (isNaN(num)) {
    alert("Please enter a valid number....")
} else {
    if (oddEvenChecker(num)==true) {  //condition when function returns true
        alert("The number is even...")
    } else if (oddEvenChecker(num)==false) { //condition when function is not true
        alert("The given number is odd...")
    }
}