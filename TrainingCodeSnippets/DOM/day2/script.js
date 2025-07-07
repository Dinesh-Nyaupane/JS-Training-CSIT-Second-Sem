//methods

let child  = document.querySelector(".p").innerText;
// console.log(child.innerText)
child.innerText="Saugat Neupane"; 




//Properties
/*
innerText
innerHtml
attribute
style
*/

//additional methods
// setAttribute()
let logo=document.getElementById("logo");
// //element.attribute="value"
// logo.src="https://api.nepathyacollege.edu.np/assets/uploads/image-1691657629011.png"
// logo.alt="Nepathya College Logo";

//css

//element.style.property="value"
// child.style.color="red";
// child.style.background="yellow"

//set Attribute

let second = document.querySelector(".p");
second.setAttribute("id","secondDiv");

logo.setAttribute("src","https://api.nepathyacollege.edu.np/assets/uploads/image-1691657629011.png");


logo.setAttribute("alt","Nepathya College Logo");