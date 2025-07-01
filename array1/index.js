// let username = "Bipin"
// console.log(username.charCodeAt(0))
// console.log(username.codePointAt(0))
// console.log(username.padStart(7,"0"))


//foreach
let fruits = ["Banana","Apple","Mango"]
fruits.forEach((item,index) => {
console.log(`${index+1}. ${item}`)
});

//map
let prices = [100,200,300,400,500]
const doubleprice = prices.map(prices=>prices*2)
console.log(doubleprice)

//filter()

const ages = [13,17,22,24]
const adults = ages.filter(ages=> ages%2==0)
console.log(adults[0])


//reduce()
let num = [1,2,3]
let sum = num.reduce((num,val)=>num +val , 0)
console.log(sum)

const letters = ["b","i","p","i","n"]
const rev = letters.reduceRight((riv,val)=>riv + val , "")
console.log(rev)

const nu = [50,80 , 90]
const even = nu.every(num => num>=40 )
console.log(even)
