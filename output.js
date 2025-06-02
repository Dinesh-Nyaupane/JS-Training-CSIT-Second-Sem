let a = 10;
function test() {
    let a = 5;
    if (true) {
        let a = 20;
        console.log(a); //a=20 due to local scope within if condition
    }
    console.log(a);     //a=5 due to local scope within test() function
}
test();
console.log(a);         //a=10 due to global scope as declare outside all function
