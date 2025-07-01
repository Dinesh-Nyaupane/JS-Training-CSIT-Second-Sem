let input=[100,200,150]
console.log(input);
map=input.map((num)=>num + num*0.13);
console.log(map.reduce((hello,sum)=>hello+sum));


let marks=[35,80,70,25,90]
console.log(marks.filter(marks=>marks >=40));


let price=[199,499,1299,850,350]
console.log(price.reduce((p,a)=>p>a ? p:a ));


let scores = [50, 65, 77, 81, 60];
let firstDistinction = scores.find(function(score) {
  return score >= 80;
});
console.log("First distinction:", firstDistinction);

