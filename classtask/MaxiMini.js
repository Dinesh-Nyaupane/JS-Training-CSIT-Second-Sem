let a=[3,2,1,4,16,20,7,22,44,7,3,2,3]
let large=a[0],small=a[0];
for(let i=0;i<13;i++)
{
    for(let j=i+1;j<=13;j++)
    {
        if(a[j]>large)
        {
            large=a[j];
        }
    }
}
for(let i=0;i<13;i++)
{
    for(let j=i+1;j<=13;j++)
    {
        if(a[j]<small)
        {
            small=a[j];
        }
    }
}

console.log("the largest in the array is "+large);
console.log("the smallest in the array is "+small);
