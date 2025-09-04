// Predict and explain the output of the following code:
let a = 10;
function test() {
    let a = 5;
    if (true) {
        let a = 20;
        console.log(a); // prints 20 in console 
    }
    console.log(a);     // prints 5 in console
}
test();
console.log(a);         // prints 10 in console
