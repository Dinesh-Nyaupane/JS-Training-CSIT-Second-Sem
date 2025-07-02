let num = +prompt("enter radius");
if(num<0){
    while(num<0){
        num = +prompt("enter radius");
    }
}
function area(radius){
    let result = (Math.PI*Math.pow(radius,2)).toFixed(2);
    return result;
}

let ans = area(num);
console.log(`Area of circle of radius ${num} is ${ans}`);