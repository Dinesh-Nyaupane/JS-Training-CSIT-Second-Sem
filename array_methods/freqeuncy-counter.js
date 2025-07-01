arr = [5,2,3,5,3,5]
let count = 0;
let input = parseInt(prompt("Enter a number you want to check frequency of: "))
for (let i = 0 ; i<arr.length ; i++){
 if (arr[i] == input){
    count ++;
 }
}
console.log("Number "+input+ " was repeated "+count+" times.")