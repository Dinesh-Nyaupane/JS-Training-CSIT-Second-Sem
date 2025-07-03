const person = {
  name: "Aayush",
  age: 18,
  country: "Nepal"
};

for (let key in person) {             // prints the property name
  console.log(person[key]);       // prints the property value
}

let fruit = {
  ft1: "apple",
  ft2: "banana"
};

fruit.ft3 = "cherry";

console.log(fruit);
console.log(Object.hasOwn(fruit,"ft1"))

/*
in
hasOwn
keys
values
Entries
freeze
seal 
getownpeopertydescrption
*/

// Define an object 'fruit'
let fruit = {
  ft1: "apple",
  ft2: "banana",
  ft3: "cherry"
};

// 1. 'in' operator: check if property exists (including inherited)
console.log("'ft1' in fruit:", 'ft1' in fruit);    // true
console.log("'ft4' in fruit:", 'ft4' in fruit);    // false

// 2. hasOwnProperty(): check if property exists directly on object
console.log("fruit.hasOwnProperty('ft2'):", fruit.hasOwnProperty('ft2')); // true
console.log("fruit.hasOwnProperty('toString'):", fruit.hasOwnProperty('toString')); // false (inherited)

// 3. Object.keys(): get array of own property names (keys)
console.log("Object.keys(fruit):", Object.keys(fruit)); 
// Output: ["ft1", "ft2", "ft3"]

// 4. Object.values(): get array of own property values
console.log("Object.values(fruit):", Object.values(fruit)); 
// Output: ["apple", "banana", "cherry"]

// 5. Object.entries(): get array of [key, value] pairs
console.log("Object.entries(fruit):", Object.entries(fruit)); 
// Output: [["ft1", "apple"], ["ft2", "banana"], ["ft3", "cherry"]]

// 6. Object.freeze(): make the object immutable
Object.freeze(fruit);
fruit.ft4 = "mango";           // Ignored — can't add new property
fruit.ft1 = "orange";          // Ignored — can't change existing property
delete fruit.ft2;              // Ignored — can't delete property
console.log("After freeze:", fruit);

// Create a new object
let fruit2 = {
  ft1: "apple",
  ft2: "banana"
};

// Seal the object
Object.seal(fruit2);

// Try modifying an existing property
fruit2.ft1 = "mango"; // ✅ allowed

// Try adding a new property
fruit2.ft3 = "orange"; // ❌ not allowed

// Try deleting a property
delete fruit2.ft2; // ❌ not allowed

// Output
console.log(fruit2);
// Output: { ft1: "mango", ft2: "banana" } — no ft3, ft2 still exists
