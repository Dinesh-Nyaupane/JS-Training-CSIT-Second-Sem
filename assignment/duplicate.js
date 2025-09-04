function removeDuplicates(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

// Example usage:
let input = "enter the string to remove the duplicates:";
let output = removeDuplicates(input);
console.log(output);  