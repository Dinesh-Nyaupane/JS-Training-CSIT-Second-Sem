////1//////
// let prices=[100,200,500,2300]
// let totalamount=prices.reduce((add,val)=>add+val,0)
// let vatamount=(totalamount*13)/100;
// let final=totalamount+vatamount;
// console.log(final)

////2/////
// let marks;
// let numbers=[];
// for(let i=1;i<=5;i++)
// {
//     marks=prompt(parseFloat("Enter the marks"))
//     numbers.push(marks)
     
// }
//    let passed=numbers.filter((num))
//    function num(a)
//    {
//     return a>=50
//    }
//    console.log(passed)
// num(numbers)



////3//////
// let maxprice=0;
// let array=[100,200,300,5000,600]
// for(i=0;i<=array.length-1;i++)
// {
// if(array[i]<array[i+1]){
//     array[i]=array[i+1];
//     maxprice=array[i];
// }
// }
// console.log(maxprice)


///4////
// let marks=[30,40,50,89,81]
// let marks1=marks.find((num))
// function num(a)
// {
//     return(a>=81)
// }
// console.log(marks1)
// num(marks)



////5/////
// let stat=[];
// let status1;
// for(let i=0;i<=5;i++)
// {
// status1=prompt("Enter the status")
// stat.push(status1)
// }
// let tocheck=stat.every((chara)=>chara=="delievered")
// if(tocheck){
//     console.log("all items has been delievered")
// }
// else{
//     console.log("all items has not been delievered")
// }



////6////
// let score=[30,32,54,34,23,67,50,80]
// let score1=score.filter((num)=>num>=50)
// let finalscore=score1.map((num)=>num+10)
// console.log(finalscore)



/////7//////
// let unit=[5,10,15,20,30,40]
// let soldunit=unit.reduce((add,val)=>add+val,0)
// console.log(soldunit)



///////8/////////
// let moviedur=[100,210,120,130,140,90]
// let dur=moviedur.find(num)
// function num(a)
// {
//     return a>=120;

// }
// num(moviedur)
// console.log(dur)



///////9////////
// let marks=[90,30,40,100,50]
// let result=marks.some(num)
// function num(a)
// {
//     return(a<40)
// }
// num(marks)
// if(result)
// {
//     console.log("there is at least one student fail")
// }
// else{
//     console.log("all student are passed")
// }



/////10////
// // let array=["milk","butter","hello"]
// let array1=array.map((num)=>num.toUpperCase())
// console.log(array1)


/////11/////
// let meal=[100,200,300,120]
// let mealcalorie=meal.reduce((acc,val)=>acc+val,0)
// console.log(mealcalorie)



///////12//////
// let room=["booked","booked","booked","available","booked"]
// let hotelroom=room.findIndex(roomm=>roomm=="available")
// console.log(hotelroom)



////////13//////
// let bool=[true,true,false,true]
// let booll=bool.some((val)=>val==false)
// if(bool)
// {
//     console.log("some items are out of stock")
// }
// else{
    
// }




//////14/////
// let array=[2,3,42,23,11]
// let array1=array.reduce(num)
// function num(a,b)
// {
//     return a*b

// }
// console.log(array1)
// num(array)




/////////15///////
// let array=["hello",1,2,"nice",5]
// let clean=array.filter(num)
// function num(a)
// {
//     return parseInt(a)
// }
// console.log(clean)
// num(array)


/////16////
// let array=[5,3,1,3,5,5,3,5]
// let array1=array.filter((num)=>num==5)
// let count=array1.length;
// console.log(count)

// let array1=[];
// for(let i=0;i<=5;i++)
// {
//     array=prompt("Enter the number")
//     array1.push(array)
// }
// let numtocount=prompt(parseInt("Enter the number"))
// let remove=array1.filter((num)=>num==numtocount)
// let count=remove.length;
// console.log(count)





/////////17////////
// let word="samip"
// let splittedword=word.split("")
// let rev=splittedword.reduceRight((acc,val)=>acc+val)
// console.log(rev)



//////18////////
// let genre=["Rock", "Jazz", "Pop"]
// let add=genre.map((word)=>word+"🎵")
// console.log(add)


