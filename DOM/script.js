document.write("<h1>enter the informations below:</h1>");
function evenodd()
{
let num=document.getElementById("number").value;

    if(num%2==0)
    {
        alert(`${num} is even number`);
    }
    else
    {
        alert(`${num} is odd number`)
    }
}
