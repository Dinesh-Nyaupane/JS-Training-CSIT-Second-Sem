function areaOfCircle(radius){
    area = Math.PI* Math.pow(radius , 2)
    return area.toFixed(2)
}
while(1){
let radius = parseFloat(prompt("Enter the radius"));
if (isFinite(radius) && !isNaN(radius) && radius > 0){
console.log("The area of circle with radius "+radius+" is "+areaOfCircle(radius));
break;
}
else{
    console.log("Invalid input..!")
}
}