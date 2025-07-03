//--------------------------------------------------------------------------------
//     question : 1
//--------------------------------------------------------------------------------
/*
Create an object called 'book' with properties:title,author,year and genre.
//Fill in appropriate values.
*/


const book = {
   title : "Muna Madan",
   author: "Laxmi Prasad Devkota",
   year: 2005,
   genre: "Social"
}
console.log(book);

// 2) Add a new property 'pages' to the book object and assign a number
book.pages = 400 ;

// 3) Update the value of the 'year'  property to a newer year
// classic method : bool.pages = 500 ;
// modern method :
book['pages'] = 500 ;

//.  4) Delete the 'genere' property from the object
delete book.genre;
console.log(book);

//.  5) Check if the property 'title' exists in the 'book' object using the 'in' operator
if('title' in book) // --> this is syntax for using [in] operator
{
   console.log("This property exists.");
}else{
   console.log("This property doesn't exists.");
}

//. 6) Use 'Object.keys()' to list all properties of the 'book' object.
console.log(Object.keys(book));

// 7) Use 'Object.values()' to list all values of the 'book' object
console.log(Object.values(book));

// 8) Use 'Object.entries()' to list all all key value pair of the 'book' object
console.log(Object.entries(book));  // -> This shows all the key and value .

// 9) Use 'Object.definePeoperty()' to add a non - enumerable property 'summary' with any string value.
Object.defineProperty(book, 'summary',
   {   
       value : "There is no such summary.",
       enumerable : false ,
   });
   console.log(book.summary); // --> This will print the value of summary property.
   console.log(Object.keys(book.summary));  // This Object.keys() will treat value of summary as array.

   
/*-------NOTE:-------
✅ Key point
1). Object.keys(book) → returns the keys of the object → shows ['title', 'author', 'year', ...] 
(but won’t include summary because it’s enumerable: false).

2) Object.keys(book.summary) → returns the indexes of characters in the string → ['0', '1', '2', ...].
     When you pass a string to Object.keys(), JavaScript treats the string like an array-like object.
*/

//. 10) Loop through the object using 'for..in' and verify that 'summary' does not appear in the loop.
/*
Syntax :
  for(variable_Name in object)
  {
   console.log(variable_Name, ":", objectName[variable_Name]);
  }
*/

for(check in book) // -> What this does is it doesn't shows property "summary"
{
   console.log(check, ":", book[check]);
}


