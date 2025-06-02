// odd-even-check

// function checkOddEven(number) {
//     if (number % 2 === 0) {
//         console.log(number + " is Even");
//     } else {
//         console.log(number + " is Odd");
//     }
// }

function countEvenNumbers(start,end){
    let count=0;
    for (i=start+1; i<end; i++){
        if(i%2===0){
            count ++;
        }
    }
    return count;
}

console.log(countEvenNumbers(3, 10)); 
console.log(countEvenNumbers(10, 3));
console.log(countEvenNumbers(4, 6));

let a = 10;
function test() {
    let a = 5;
    if (true) {
        let a = 20;
        console.log(a); 
    }
    console.log(a);   
}
test();
console.log(a);

function perfectSquare(num){
    if (num<0){
        return false;
    }

    for(i=0; i<=num; i++){
        if( i*i === num){
            return true;
        }
    }
    return false;
}

console.log(perfectSquare(4));
console.log(perfectSquare(5));

function sum(x,y){

    s=x+y;
    return s;
}

let digit=sum(2,2);
console.log(digit);

