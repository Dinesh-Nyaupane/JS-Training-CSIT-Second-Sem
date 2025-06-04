let celsius=Number(prompt("enter the temperature in celsius:"));
let faren;
if(isFinite(celsius))
{
    faren=((celsius*9/5)+32).toFixed(1);
}
else
{
    console.log(false);
}
console.log(celsius+"°C equals "+faren+"°F")