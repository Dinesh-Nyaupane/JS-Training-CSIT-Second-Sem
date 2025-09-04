function area(r){
    return Math.PI*Math.pow(r,2);
}
let radius= Number(prompt("Enter the radius of circle"));
console.log("The area of circle is " + area(radius).toFixed(2));
