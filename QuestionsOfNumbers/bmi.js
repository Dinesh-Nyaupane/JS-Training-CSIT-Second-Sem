let weight=Number(prompt("enter the weight in kg:"));
let height=Number(prompt("enter the height in meter:"));
height=height*height;
if(isFinite(weight,height))
{
    var bmi=(weight/height);
    console.log("BMI calculated as "+bmi.toFixed(1));
}
else
{ 
    console.log(false);
}


