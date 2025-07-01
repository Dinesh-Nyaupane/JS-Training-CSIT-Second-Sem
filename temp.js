// Convert Celsius temperature to Fahrenheit with input validation.
function temperature(Celsius) {
    if (isNaN(Celsius)) {
        return "false";
    }
    return (Celsius * 9/5) + 32;
}
const temp = prompt("Enter the temperature in celsius:");
console.log(`Temperature in fahrenheit is: ${temperature(temp)}`);