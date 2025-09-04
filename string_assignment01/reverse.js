let reverse_string = "hello";
let length_of_string = reverse_string.length;
var sum = "";
for (let i = length_of_string - 1; i >= 0; i--) {
  sum += reverse_string[i];
}
console.log(sum);
