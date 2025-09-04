let reverse_string = "hello";
let hold = reverse_string;
let length_of_string = reverse_string.length;
var sum = "";
for (let i = length_of_string - 1; i >= 0; i--) {
  sum += reverse_string[i];
}
if (hold === sum) {
  console.log(reverse_string + " is palindrome ");
} else {
  console.log(reverse_string + " is  not palindrome ");
}
