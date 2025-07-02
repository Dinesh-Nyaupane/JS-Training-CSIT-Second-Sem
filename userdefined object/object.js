///////1//////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// }
// console.log(Object.values(book))



/////2/////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// };
// book.pages=30;
// console.log(Object.values(book))




//////////3//////////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// }
// book.year=1991;
// console.log(Object.values(book))




//////4//////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// };
// delete book.genre;
// console.log(Object.values(book))

/////5///////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// }
// console.log(Object.values(book))
// console.log("title"in book)



//////6////////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// }
// console.log(Object.getOwnPropertyNames(book))
// console.log(Object.values(book))



////////7/////////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// }
// console.log(Object.keys(book))
// console.log(Object.values(book))



///////8///////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya"
// }
// console.log(Object.values(book))
// console.log(Object.entries(book))


///////9 and 10/////////
// const book={
//     title:"Muna Madan",
//     author:"laxmi prasad devota",
//     year:1990,
//     genre:"sahitya",
//     summary:"society"
// }
// Object.defineProperty(book,"summary",{
//     value:"nice",
//     enumerable:false
// })
// for(let key in book)
// {
//     console.log(key)
// }