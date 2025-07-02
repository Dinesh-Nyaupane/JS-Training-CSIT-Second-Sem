let consume = +prompt("enter the units consumed");
let total = 0;
if(consume<=100&&consume>=0){
    total= consume*5;
}else if(consume>100&&consume<=200){
    total = 500 + (consume-100)*7;
}else{
    total = 500 + 600 + ((consume-200)*10);
}

console.log(`your total rate is ${total}`)