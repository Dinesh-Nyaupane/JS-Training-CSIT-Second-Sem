// Convert Celsius temperature to Fahrenheit with input validation.

function toConvert(Celsius)
{
    if(isNaN(Celsius)==false || isFinite(Celsius))
    {
        let Fahrenheit=(Celsius*(9/5))+32;
        console.log(Celsius+"°C equals to "+Fahrenheit+"°F")
    }
    else
    {
        console.log("false")
    }
}
let a=parseFloat(prompt("Enter a Celsius: "));
toConvert(a)
