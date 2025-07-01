//To reverse name
let name = "angel";
let reversed = name.split("").reduceRight((acc, char) => acc + char, "");
console.log(reversed);
