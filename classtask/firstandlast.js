let a=[3,2,1,4,16,20,7,22,44,7,3,2,3]
let sum=0;
for(let i=0;i<a.length;i++)
{
    if(a[0]==a[a.length-1])
    {
        console.log("are same");
        sum=a[0]+a[a.length-1];
    }
}
console.log("the sum of first and last elements is "+sum)