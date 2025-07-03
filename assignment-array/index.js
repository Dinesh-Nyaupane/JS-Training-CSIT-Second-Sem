let number = [100,200,150]
let vat = number.map(num=>num +num*13/100);
console.log(vat.reduce((Acc,vat) => Acc + vat ,0))

let marks= [35,80,70,25,90]
console.log(marks.filter(mark=> mark>=40))

let value = [10,20,80,20,40,30]
console.log(value.reduce((a,b)=>a>b?a:b))


let mark = [10,90,40 ,50]
let dist = mark.find(mark=>mark>=80)
console.log(`first distinction is ${dist} and first index is ${mark.findIndex(mark=>mark>=80)}` )


let del = [true,true,false,true]
let tr = del.every(num => num == true)
if(tr){
    console.log("true")
}
else{
    console.log("Obtained not available")
}

let game = [30, 55, 70, 45, 90]
console.log(game.filter(game=>game>50).map(item=>item + 10))

let sold = [2, 5, 7, 3]
console.log(sold.reduce((acc,sold) =>acc + sold ,0))

let hrs = [90, 110, 130, 100]
console.log(hrs.find(num => num>=120))

let marrk =   [70, 55, 30, 85]
let pass = marrk.some(mmarks => mmarks>40)
if(pass){
    console.log("There no one failed student.")
}
else{
      console.log("There is at least one failed student.")
}

let protein = [300,450, 500]
console.log(protein.reduce((acc, protein)=>acc + protein ,0))

 let product = ["milk", "bread", "butter"] 
 console.log(product.map(num => num.toUpperCase()))

 let room = ["booked", "booked", "available", "booked"] 
console.log(room.findIndex(rooms=>rooms === "available"))



let stock = [true ,true,false, true]
let sell = stock.some(stocks=>stocks === false)

if(sell){
    console.log("some are out of stock")
}
else{
    console.log("Some are not out of stock")
}


let into = [1, 2, 3, 4]
console.log(into.reduce((acc,add)=>acc * mult,1))


let nume = [1, "hello", 3, true, 5];
let numbersOnly = nume.filter(item => typeof item === "number");

console.log(numbersOnly);


let num=[5, 2, 5, 6, 5]
let valuee=num.filter(neme=>neme==5)
console.log("5 occurs"+valuee.length+"time")


let nome="gnidoc"
let split= nome.split("")
console.log(split.reduceRight((aa,bb)=>aa+bb,""))

let titles= ["Rock", "Jazz", "Pop"]
console.log(titles.map(num=>num+"🎵"))

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbers = [4, 6, 8, 11, 15];

const firstPrime = numbers.find(isPrime);

console.log("First prime:",firstPrime);


const orders = [1, 2, 2, 3, 4, 4, 5];

const uniqueOrders = orders.filter((order, index) => {
  return orders.indexOf(order) === index;
});

console.log(uniqueOrders);


