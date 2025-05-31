function sod(){
    let x=12345;
     temp =x;
    while(x!=0){
        let rem = x%10;
        sum=sum*10+rem;
        x=x/10;

    }
    return sum;
}
function count(){
    let x=1;
    let y=10;
    let  c=0;
    for(i=x+1;i<y;i++){
      if(i%2==0){
        c++;
      }
    }
    return c;
}

function root(){
    let x=4;
    y=x**(1/2)
    if(y%1==0){
        return true;
    }
    else{
        return false;
    }
}

function sal(){
    hr=5;
    hrExtra=2;
    basic=200;
    bonus=(hrExtra-5)*50;
    salary=basic+bonus;
    return salary;
}

let a = 10;
function test() {
    let a = 5;
    if (true) {
        let a = 20;
        console.log(a); // 20
    }
    console.log(a);     //5
}

console.log(a);  //10  
root();
test();
sod();
sal();
root();
count();
