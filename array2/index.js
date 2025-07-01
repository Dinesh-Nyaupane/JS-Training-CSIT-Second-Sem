let num =  [1,3,4,,6]
console.log(num.reverse())

let namee = "Bipin"
let split = namee.split("")
let rev = split.reverse()
let join = rev.join("")
console.log(join)



//sort
let nume = [1,11,111,222,33,4,5,6,33,66]
console.log(nume.sort((a,b)=>a-b))  //asscending
console.log(nume.sort((a,b)=>b-a)) //decending

//addtional methods
/*
tostring
from()
isArray()
of()
*/


console.log(nume.toString())

let username = "Bipin"
let sp =Array.from(username)  //spit garxa
console.log(sp.reverse().join(""))

console.log(Array.isArray())
console.log(Array.of(1,2,3))

let fruits = ['Cherry','cheery','banana','apple','grapes']


let ft1 = fruits[0]
let ft2 = fruits[1]
console.log(ft1.charCodeAt(0))
console.log(ft2.charCodeAt(0))

console.log(fruits.sort())

console.log(fruits.sort().reverse()) //uppercase first 









