// odd even check garne 
function checkOddEven(num) {
    if (num % 2 == 0) {
        console.log(num + " is even");
        } else {
            console.log(num + " is odd");
            }
            }

            let num = parseInt(prompt("Enter number:"));
            checkOddEven(num);
