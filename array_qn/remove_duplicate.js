let array = [1, 2, 2, 3, 4, 4, 5];
let filtered = array.filter((item, index) => array.indexOf(item) === index);
console.log(filtered);
