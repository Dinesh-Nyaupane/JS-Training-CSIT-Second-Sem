let arr=[1,5,7,8,3,4,0,11,4,55,77,10,40,6,10]
console.log("first even number in the array:")
console.log(arr.find((num)=>num%2==0));
console.log(arr.findIndex((num)=>num%2==0));

console.log("\nfirst multiple of 3:");
console.log(arr.find((num)=>num%3==0));
console.log(arr.findIndex((num)=>num%3==0))

console.log("\n\n\n")
let name="puskar";
let nom="5";
console.log(name.charCodeAt(0));
console.log(name.codePointAt(0));
console.log(nom.padStart(5,"0"));
console.log(nom.padEnd(5,"0"));




let str = ["apple", "banana", "cauliflower", "education", "fish"];
console.log("The longest string among the array:");

// Step 1: Find the longest length
let max = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i].length > max) {
        max = str[i].length;
    }
}

// Step 2: Use .find() to get the first string with that length
let longest = str.find(s => s.length === max);

console.log("The longest string is " + longest);

console.log("\n\n")
console.log("the first element starting with consonent is:")

console.log("for each ko use")
const fruit=["apple","banana","cherry"]
fruit.forEach((item,index)=>
{
    console.log(`${index},${item}`)
});

console.log("\n\n\nmap ko use");
let price=[100,200,300,400,500];
console.log(price.map(prices=>prices*2));

console.log("\n\n\nfilter ko use");
let array=[1,2,3,4,5,6,7,8,9,0];
let even=array.filter(evens=>evens%2==0);
console.log(even);

console.log("\n\n\nreduce ko use")
let abc="olleh";
let split=abc.split("");
let reversed;