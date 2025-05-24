let a=parseInt(prompt("Enter a number:"));
while(isNaN(a)){
    a=parseInt(prompt("Invalid number enter again :) "));
}
function check(a){
    if(a===0){
       return "zero"; 
    }
     else if(a%2===0){
        return "even";
    }
    else{
        return "odd";
    }
}
let result=check(a);
if(result=== "zero"){
    alert(a+" is neither Even nor Odd");
}
else if(result === "even"){
    alert(a+" is Even ");
}
else{
    alert(a+" is Odd ");
}