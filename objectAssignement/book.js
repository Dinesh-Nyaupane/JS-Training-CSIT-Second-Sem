const book={
    title:"munamadan",
    author:"laxmi prasad devkota",
    year:1950,
    genre:"social drama and tragedy",
}
book.pages=259;//add new property
book.year=1940;//update year
delete book.genre;//delete the property genre
console.log(book)
console.log('title' in book);//check property title in the object book
console.log(Object.keys(book));//to display all the keys
console.log(Object.values(book));//to display all the values 
console.log(Object.entries(book));//to display all the key value pairs
Object.defineProperty(book, 'summary', {//add property 'summary' with property non-enumerable
    value:"madan",
    writable: true,//to update
    enumerable: false,//to loop
    configurable: true,//delete or add
});
console.log(Object.getOwnPropertyDescriptor(book,"summary"));
for (let key in book) {//loop and not to display summary
    console.log(`${key}: ${book[key]}`);
}