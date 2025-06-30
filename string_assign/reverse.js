let word = "Rohit";
let reverse ="";
for(i = 0 ; i < word.length ; i++){
reverse = reverse + word.slice(word.length-1-i, word.length-i);
}
console.log("Revers of the given word is: " + reverse);
