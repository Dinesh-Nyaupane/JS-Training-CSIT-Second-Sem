let naam = "coding";
let splitted = naam.split("");
let reversed = splitted.reduceRight((value, sum) => value + sum, "");
console.log(reversed);
