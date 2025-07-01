/*
let arr = [1, 2, "abc", 9, 7, 8, 9];
//push
arr.push("hello");
console.log(arr);

//pop
arr.pop();
console.log(arr);

//unshift

arr.unshift(29);
console.log(arr);

//shift
arr.shift();
console.log(arr);

console.log("here it is " + arr.find((num) => num == 9));
console.log("here it is " + arr.findIndex((num) => num == 9));

//task

let array = [1, 5, 7, 8, 3, 4, 0, 11, 4, 55, 77, 10, 40, 6, 10];
console.log("The first even number is " + array.find((num) => num % 2 == 0));
console.log(
  "The first even numbers index is " + array.findIndex((num) => num % 2 == 0)
);
console.log("The first multiple of 3 is" + array.find((num) => num % 3 == 0));
console.log(
  "The first even numbers index is " + array.findIndex((num) => num % 3 == 0)
);
*/
// let stringArray = ["apple", "banana", "cauliflower", "education", "fish"];

// let length_of_array = stringArray.length;
// let result = stringArray.find(function longest_string(
//   array_of_string,
//   length_of_arr
// ) {
//   let longest = array_of_string[0];
//   for (let i = 1; i <= length_of_arr - 1; i++) {
//     if (array_of_string[i].length > longest) {
//       longest = array_of_string[i];
//     }
//   }
//   return longest;
// });
// console.log(result);

/*
for each()
*/
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((items, index) => {
  console.log(`${index + 1}.${items}`);
});

//map() method

let price = [100, 200, 300, 400];
console.log(price);
let double_price = price.map((double_rate) => double_rate * 2);
console.log(double_price);

//filter() method

let ages = [20, 29, 5, 6, 19];
console.log(ages.filter((valid_adults) => valid_adults >= 18));
// console.log(adults);

//join

let naame = "Sandesh";
let splitted = naame.split("");
let reversed = splitted.reverse().join("");
console.log(reversed);

//sort

let num = [14, 2, 3, 8, 10, 9, 7, 6, 20, 18];
console.log(num.sort((a, b) => a - b));
console.log(num.sort((a, b) => b - a));

//creating array

console.log(Array.of(1, 6, 9));

//string sorting

let array2 = ["cauli", "brocolli", "apple"];
console.log(array2.sort());
