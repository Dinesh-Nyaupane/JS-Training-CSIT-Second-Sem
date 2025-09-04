let u=parseInt(prompt("enter the units consumed:"));
let unit=u;
if(unit>=0 && unit<=100)
{
    unit=unit*5;
}
else if(unit>=101 && unit<=200)
{
    unit=100*5+(unit-100)*7;
}
else if(unit>200)
{
    unit=(100*5)+(200-100)*7+(unit-200)*10;
}
let total=Math.round(unit);
console.log("Electricity bill for "+u+"is "+total);