//palindrome string
let rev = (word) => word.split("").reverse().join("");
let inputWord = "wow";

if (inputWord == rev(inputWord)){
    console.log("this word is palindrome")
}
else{
    console.log(("this world is not palindrome"));
    
}