//1

const book1 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 1915,
  genre: "Classic"
};

console.log(book1);


//2

const book2 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 1915,
  genre: "Classic"
};

book2.pages = 281;
console.log(book2);


//3

const book3 = {
 title: "Metamorphosis",
  author: "Franz Kafka",
  year: 1915,
  genre: "Classic",
  pages: 281
};

book3.year = 2025;
console.log(book3);


//4

const book4 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 2025,
  genre: "Classic",
  pages: 281
};

delete book4.genre;
console.log(book4);

//5

const book5 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 2025,
  pages: 281
};

if ('title' in book5) {
  console.log("The 'title' property exists:", book5.title);
} else {
  console.log("The 'title' property does not exist.");
}

//6

const book6 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 2025,
  pages: 281
};

const keys = Object.keys(book6);
console.log("Properties of the 'book' object:", keys);

//7

const book7 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 2025,
  pages: 281
};

const values = Object.values(book7);

console.log("Values of the 'book' object:", values);

//8

const book8 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 2025,
  pages: 281
};

const entries = Object.entries(book8);
console.log("Key-Value pairs of the 'book' object:", entries);


//9

const book9 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 2025,
  pages: 281
};

Object.defineProperty(book9, 'summary', {
    value: "A man transforms into an insect and his families reactions highlights themes of alienation and dehumanization and the breakdown of family bonds.",
    enumerable: false
});

console.log("Summary:", book9.summary);

console.log("Enumerable properties:", Object.keys(book9));

//10

const book10 = {
  title: "Metamorphosis",
  author: "Franz Kafka",
  year: 2025,
  pages: 281
};

Object.defineProperty(book10, 'summary', {
    value: "A man transforms into an insect and his families reactions highlights themes of alienation and dehumanization and the breakdown of family bonds.",
    enumerable: false
});

console.log("Properties using for...in loop:");
for (let key in book10) {
    console.log(`${key}: ${book10[key]}`);
}

console.log("\nAccessing 'summary' directly:");
console.log("summary:", book10.summary);




    