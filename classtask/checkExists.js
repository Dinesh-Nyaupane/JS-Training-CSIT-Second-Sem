let a=[10,20,2,5,7,9,8,31,42,99,30,17];
let sum=0;
let num=Number(prompt("enter any number to check if it exists in the array:"));
for(let i=0;i<a.length;i++)
{
    if(a[i]===num)
    {
        sum=sum+1;
    }
}
if(sum!=0)
{
    console.log(num+ " exists in the array")
}
else
{
    console.log(num +" doesnot exists in the array")
}

