let arr1 = [1,2,"abc",1,2,3,4,5,6,7,8,9]
//array methods
/* 
push() -> adds elements to last

pop() -> removes elements from last

shift()

unshift()
*/
// console.log(arr1)
// arr1.push(true)
// console.log(arr1)
// console.log(arr1.pop())
// console.log(arr1)

// arr1.unshift(20)
// console.log(arr1)

// arr1.shift()
// console.log(arr1)

// //splice(index,no of elements)
// let ramoved2=arr1.splice(3,7)
// console.log(ramoved2)

// console.log(arr1)


// Searching 
let numArray = [2,4,56,7,8,9,3,4,65,7,8,9,9,9,9]
/* 
Write a program to implement find and findIndex
matching comdition number=9.
*/

/* 
indexOf()
lastIndexOf()
includes()
find()
findIndex()
*/
console.log(numArray.indexOf(9)) //5
console.log(numArray.lastIndexOf(9)) //11

console.log(numArray.includes(2)) //check if the element is present in array or not

// let number = numArray.find()
console.log(typeof number);

// function condition(num){
//     return num>10;
// }
// let condition = function(num){
//     return num==9
// }

console.log(numArray.findIndex((num)=>num==9))


//Class Task
/* 
[1,5,7,8,3,4,0,11,4,55,77,10,40,6,10]
1. Find the first even number and its index in an array.

2. Find first multiple of three and its index.

["apple", "banana", "cauliflower", "education", "fish"]
3. Find the first long word in the given array.

4. Find the first word starting with consonant. 
*/
