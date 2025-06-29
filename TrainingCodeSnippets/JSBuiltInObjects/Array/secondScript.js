//Array methods

/* 
forEach() -> 
executes a provided function once for each 
array element
Syntax:
array.forEach(function(currentValue, index, arr)=> {
    // code to be executed
}

map() -> 
creates a new array with the results of 
calling a provided function on every element in 
the calling array
Syntax:
array.map(function(currentValue, index, arr)=> {
    // code to be executed
})

filter() -> 
creates a new array with all elements that pass 
the test implemented by the  provided function   
Syntax:
array.filter(function(currentValue, index, arr)=> {
    // code to be executed
})

reduce() -> 
executes a reducer function on each element of the
array, resulting in a single output value
Syntax:
array.reduce(function(accumulator, currentValue, index, arr) {

reduceRight() -> 
applies a function against an accumulator and 
each element in the array (from right-to-left) 
to reduce it to a single value
Syntax:
array.reduceRight(function(accumulator, currentValue, index, arr) {
    // code to be executed  
}

every() -> 
tests whether all elements in the array pass 
the test implemented by the provided function
Syntax:
array.every(function(currentValue, index, arr)=> {
    // code to be executed
})

some() -> 
tests whether at least one element in the 
array passes the test implemented by the provided
Syntax:
function(currentValue, index, arr)=> {
    // code to be executed      
}
    
*/
//forEach
// const fruits = ["apple", "banana", "cherry"];
// // console.log(`this is nepathya college ${fruits}`)

// fruits.forEach((item, index) => {
//   console.log(`${index}. ${item}`);
// });

//Map
// let prices = [100, 200, 300, 400, 500];
// console.log(prices)
// const doubledPrices= prices.map((item=>item+item*18/100));
// console.log(doubledPrices);

// function double(price){
//     return price*2
// }

//filter
// const ages = [12, 17, 22, 25];
// const adults = ages.filter(age => age >= 18);
// console.log(adults); // [22, 25]
// console.log(adults[0])

//reduce
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((add, val) => add + val, 0);
// console.log(sum); // 10

// //reduceRight
// let username = "hsenid"
// let splittedArray = username.split("")
// // const letters = ['a', 'b', 'c'];
// const reversed = splittedArray.reduceRight((acc, val) => acc + val, '');
// console.log(reversed); // "cba"

//every
const scores = [80, 85, 90, 30];
const allPassed = scores.every(score => score >= 50);
console.log(allPassed); // true
if(allPassed){
    console.log("All students are passed")
}else{
    console.log("Not all students are passed")
}


//some()
const taskStatus = [true,true,true]; // true = done, false = pending
const anyPending = taskStatus.some(status => status === false);
console.log(anyPending); // true

