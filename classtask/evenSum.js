let a=[10,20,2,5,7,9,8,31,42,99,30,17];
let sum=0;
console.log("the even numbers are:")
for(let i=0;i<a.length;i++)
{
    if(a[i]%2==0)
    {
        console.log(a[i]);
        sum=sum+a[i];
    }
}
console.log("the sum of even numbers is"+sum);