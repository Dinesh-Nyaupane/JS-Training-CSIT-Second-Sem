word = "Jagged"
let char;
let newWord = "";
for ( i = 0 ; i< word.length ; i++){
    char = word[i];
    if (! newWord.includes(char)){
newWord = newWord + char;
    }
}

