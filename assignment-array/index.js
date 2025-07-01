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

console.log(tr)
