let inputCel=Number(prompt("Enter temperature in celsius"))
function tempConv(c){
    return (c*9/5)+32;
}
console.log(inputCel+"°C is " + tempConv(inputCel) + "°F");
