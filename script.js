let number = Number(prompt("Enter a number"));

function oddEven(num){
if (isNaN(num)){
    console.log("Invalid input")
}
else{
    if(num % 2 === 0){
        console.log("Even");
    }
    else{

        console.log("Odd");
    }
}
}
oddEven(number);