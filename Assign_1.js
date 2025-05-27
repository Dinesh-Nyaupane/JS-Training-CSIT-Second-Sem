let num = Number(prompt("Enter the number you want to check : "));
function oddEven(num)
{
    if(num % 2 == 0)
    {
        console.log((num)+" is even number ");
    }else{
        console.log((num)+" is odd number");
    }

}
oddEven(num);