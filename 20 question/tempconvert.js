//INCOMPLETE

let celsius = +prompt("enter temp in CELSIUS");
let numcheck = isNaN(celsius);

while(numcheck==true){
        num = +prompt("enter valid temp");
        numcheck = isNaN(num);
        if(numcheck==false){
            celsius = num;
        }
    }

function convert(celsius){
    let Fahrenheit = (celsius * (9/5) +32);
    return Fahrenheit;

}

let result = convert(celsius);
console.log(`the temp in fahrenheit is ${result}`)