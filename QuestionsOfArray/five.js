let input=[true,true,false,true];
let check = input.every(cond=>(cond===true));
if(check){
    console.log("all orders delivered")
}
else
{
    console.log("all orders are not delivered")
}