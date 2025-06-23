let radius=Number(prompt("Enter radius of circle: "));
function area_of_circle(radius){
let area =0;
if(isFinite(radius)){
area =Math.PI*Math.pow(radius,2);
return area.toFixed(2)
}
}
console.log("The area of circle with radius "+radius+" is "+area_of_circle(radius))