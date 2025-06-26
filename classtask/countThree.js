let a=[3,2,1,4,16,20,7,22,44,7,3,2,3]
let count=0;
for(let i=0;i<a.length;i++)
{
    if(a[i]==3)
    {
        count=count+1;
    }
}
console.log("3 repeats for "+count+" times in the array");