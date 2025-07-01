// //reverse

// let numbers = [1,3,4,5,6]
// console.log(numbers.reverse())

// let user = "Dinesh"
// let split = user.split("")
// console.log(split)

// let reversed = split.reverse();
// console.log(reversed)

// //join
// console.log(reversed.join(" "))

//sort
let num = [1,4,2,3,8,10,9,7,6,20,18,45,23,11,111,111111]

console.log(num.sort()) //

//Additional methods
/* 
toString()
from()
isArray()
of()
*/

console.log(num.toString())

let username = "Dinesh"
console.log(Array.from(username))

console.log(Array.isArray(num))


//creating array
console.log(Array.of(1,2,3))

//sorting string

let fruits = ["cherry","charry","banana","apple","grapes",1,100]

let ft1 = fruits[0]
let ft2 = fruits[1]
let ft3 = fruits[3]
console.log(fruits)
console.log(ft1.charCodeAt(0)) //c
console.log(ft2.charCodeAt(0)) //C
console.log(ft3.charCodeAt(0)) //a
console.log(fruits.sort())

let item = [100,150,20,40,30,10,200]
