let input=[70,55,30,85];
let final=(input.some((abc)=>(abc<40)));
if(final)
{
    console.log("at least one student failed")
}
else
{
    console.log("all students passed")
}