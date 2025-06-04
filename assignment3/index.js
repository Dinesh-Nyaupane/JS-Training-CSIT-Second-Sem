//premitive boolean
let a = true;
console.log(a);
// //object
let bool = new Boolean();
let truebool = new Boolean(true);
console.log(bool);

console.log(typeof a); //boolean
console.log(a.toString());

// // value of
console.log(bool.valueOf());
console.log(truebool.valueOf());

// //number object
let num1 = 123;
let num2 = Number("123");

//properties:
// MAX_VALUE
// MIN_VALUE
// POSITIVE_INFINITY
// NEGATIVE_INFINITY
// NaN
// EPSILION

//propeties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.EPSILON);
//methods:
console.log(isNaN("Sushank"));
console.log(isFinite());
console.log(Number.isInteger(1));
console.log(parseInt(" "));
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12));
console.log(Math.random(3456));
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.round(40.78));
console.log(Math.max(1,2,3,4));
console.log(Math.min(4,2,1,3));
console.log(Math.trunc(23.55));
console.log(Math.sign(-45));
console.log(num1.toFixed(2));
