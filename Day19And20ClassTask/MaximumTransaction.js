//Maximum Transaction Finder
function maxTransaction(a, b, c) {
  if (a.length == 0||b.length == 0||c.length == 0) return "No valid transactions";
  else if (isNaN(a))return Math.max(b,c);
  else if (isNaN(b))return Math.max(a,c);
  else if (isNaN(c))return Math.max(a,b);
  else return Math.max(a,b,c);
}
let t1 = parseFloat(prompt("Enter transaction 1"));
let t2 = parseFloat(prompt("Enter transaction 2"));
let t3 = parseFloat(prompt("Enter transaction 3"));
console.log("Maximum valid transaction amount is " +maxTransaction(t1, t2, t3));
