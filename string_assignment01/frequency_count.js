let string_value = "helloworld";
let choice_value = prompt("Enter the character to check frequency:");
let location_of_char = string_value.indexOf(choice_value);
let length_of_string = string_value.length;
var c = 0;
for (let i = 0; i < length_of_string; i++) {
  if (string_value[i] === choice_value) {
    c++;
  }
}
console.log(choice_value + " appears " + c + " times in " + string_value);
