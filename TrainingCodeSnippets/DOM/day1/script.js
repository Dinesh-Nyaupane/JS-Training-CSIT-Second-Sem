let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function add() {
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value)
    let result = n1 + n2;
    console.log("Result: " + result);
    document.getElementById("result").innerText = "Result: " + result;
}