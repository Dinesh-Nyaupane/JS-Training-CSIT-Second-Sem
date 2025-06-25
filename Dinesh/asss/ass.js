// let another="  Welcome to coding!   "
// let word="Developer"
// let text="JavaScript is fun!"
// //1
// console.log(text.length);
// //2
// console.log(text.charAt(0));
// // console.log(text.charAt(str.length - 1));
// //3
// console.log(text.toUpperCase());
// //4
// console.log(text.toLowerCase());
// //5
// console.log(another.trim);
// //6
// console.log(word.slice(1,5));
// //7
// console.log(word.substring(2,4));
// //8
// console.log(word.repeat(2));
// //9
// console.log(text.replace("good"));
// //10
// console.log(word+text);
//11
let p="jhon@example.com"
let a=0
for(let i=0;i>p.length;i++)
{
    if(p[i]=="@")
    {
        a=i;
    }
    }
console.log(p.slice(1,a));

