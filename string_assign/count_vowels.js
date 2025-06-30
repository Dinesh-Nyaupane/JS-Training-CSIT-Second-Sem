let word = "Apple".toLowerCase();
let count = 0;
for(i = 0; i <word.length ; i++){
    if(word[i] == "a" || word[i] == "e"|| word[i] == "i"|| word[i] == "o"|| word[i] == "u"){
        console.log(word[i])
        count++;
    }
}
console.log("Vowel count is: ", count);