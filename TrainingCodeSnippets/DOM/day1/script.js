// let mainId = document.getElementById("mainId").innerHTML="<i>THis is me</i>";
// console.log(mainId)

//byClass
//byTagname


//HTMLcollection
let mainClass = document.getElementsByTagName("p");
console.log(mainClass)
// // console.log(typeof mainClass)
// // console.log(mainClass.length)


for(let i = 0;i<mainClass.length;i++){
    console.log(mainClass[i].innerText)
}

// let mainTag = document.getElementsByTagName("p")[0].textContent;
// console.log(mainTag)

//querySelector() - > first element 
//querySelectorAll() -> all elements making HTML Collection

let firstClass  = document.querySelectorAll("p");
console.log(firstClass);
for(let i = 0;i<firstClass.length;i++){
    console.log(firstClass[i].innerText)
}