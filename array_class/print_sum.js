let array = [10, 20, 2, 5, 7, 9, 8, 31, 42, 99, 30, 17];
let sum = 0;
for (let i = 0; i < 12; i++) {
  sum += array[i];
}

console.log("sum of 11 elements is " + sum);

function array_function(array) {
  evensum += array;
  return evensum;
}
let evensum = 0;
let hold = 0;

console.log("even numbers");
for (let i = 0; i < 12; i++) {
  if (array[i] % 2 == 0) {
    console.log(array[i]);
    hold = array_function(array[i]);
  }
}
console.log("sum  of even is " + hold);

let store = 0;
let oddsum = 0;

function array_function(array) {
  evensum += array;
  return evensum;
}

console.log("odd numbers");
for (let i = 0; i < 12; i++) {
  if (array[i] % 2 != 0) {
    console.log(array[i]);
    store = array_function(array[i]);
  }
}
console.log("sum  of odd is " + store);

let check_element = Number(prompt("enter the number to check"));
function checkInput(Array, check_element) {
  for (let i = 0; i < 12; i++) {
    if (array[i] === check_element) {
      return true;
    }
  }
  return false;
}
if (checkInput(array, check_element)) {
  console.log(check_element + " is present in array");
} else {
  console.log("not present");
}

let array1 = [3, 2, 1, 4, 16, 20, 7, 22, 44, 7, 3, 2, 3];
let length_of = array1.length;
let sum_of_first_and_last;
if (array1[0] === array1[length_of - 1]) {
  sum_of_first_and_last = array1[0] + array1[length_of - 1];
}
console.log("sum of first and last element is " + sum_of_first_and_last);

//print in reverse
console.log("printing in reverse");
for (i = length_of - 1; i >= 0; i--) {
  console.log(array1[i]);
}

let count_of_three = 0;
for (i = 0; i < 13; i++) {
  if (array1[i] === 3) {
    count_of_three++;
  }
}
console.log("three appears " + count_of_three + " times ");

//largest and smallest
let greatest = array1[0];
let smallest = array1[0];

for (let k = 0; k < length_of - 1; k++) {
  if (array1[k] > greatest) {
    greatest = array1[k];
  }
  if (array1[k] < smallest) {
    smallest = array1[k];
  }
}
let diff = greatest - smallest;

console.log("greateest is " + greatest + "smallest is " + smallest);
console.log("difference is " + diff);
