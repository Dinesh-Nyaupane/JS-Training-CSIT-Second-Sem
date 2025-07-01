let array=[70,55,30,85];
let value=array.some((val)=>val<40);
if(value){
    console.log(`There is atleast one student failed:`);
}
else{
    console.log(`All are passed`);
}