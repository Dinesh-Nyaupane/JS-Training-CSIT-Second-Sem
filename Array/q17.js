let name = "coding";

let reversedName = name
  .split("")
  .reduceRight((reversed, char) => reversed + char, "");

console.log(reversedName); 
