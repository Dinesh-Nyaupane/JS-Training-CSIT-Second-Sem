// // // // ////1///////
// // // // let remainder=1;
// // // // let sum=0;
// // // // function sumd(a){
// // // // while(a!=0)
// // // // {
// // // //  remainder=a%10;
// // // //  sum=sum+remainder;
// // // //  a=parseInt(a/10);   
// // // // }
// // // // return(sum);
// // // // }
// // // // let a=parseInt(prompt("enter the digits"))
// // // // let y=sumd(a);
// // // // console.log(y);



// // // // ////2//////


// // // // let a=parseInt(prompt("enter the numbers"))
// // // // let b=parseInt(prompt("enter the numbers"))
// // // // let count1=0;
// // // // let count2=0;
// // // // let remainder1=1;
// // // // let remainder2=1;
// // // // while(a!=0)
// // // // {
// // // //     remainder1=a%10;
// // // //     if(remainder1%2==0)
// // // //     {
// // // //         count1++;
// // // //     }
// // // //     a=parseInt(a/10);
// // // // }

// // // // while(b!=0)
// // // // {
// // // //     remainder2=b%10;
// // // //     if(remainder2%2==0)
// // // //     {
// // // //         count2++;
// // // //     }
// // // //     b=parseInt(b/10);
// // // // }
// // // // let total=count1+count2;
// // // // console.log(total);

// // // let count1=0;
// // // let count2=0;
// // // let remainder1=1;
// // // let remainder2=1;

// // // function count(a,b){
// // //     while(a!=0)
// // // {
// // //     remainder1=a%10;
// // //     if(remainder1%2==0)
// // //     {
// // //         count1++;
// // //     }
// // //     a=parseInt(a/10);
// // // }

// // // while(b!=0)
// // // {
// // //     remainder2=b%10;
// // //     if(remainder2%2==0)
// // //     {
// // //         count2++;
// // //     }
// // //     b=parseInt(b/10);
// // // }
// // // let total=count1+count2;
// // // return(total);
// // // }
// // // let a=parseInt(prompt("Enter the number"))
// // // let b=parseInt(prompt("Enter the number"))
// // // let y=count(a,b);
// // // console.log(y)




// // ///////3////////
// // // let a=parseInt(prompt("Enter the number"))
// // // let y=a**(1/2);
// // // let c=parseInt(a/y)

// // // if(y==c)
// // // {
// // //     console.log("yes")
// // // }
// // // else{
// // //     console.log("no")
// // // }


// // function persq(a)
// // {
// //   let y=a**(1/2);
// // let c=parseInt(a/y)

// // if(y==c)
// // {
// //     console.log("yes")
// // }
// // else{
// //     console.log("no")
// // }
// //   return(y);
// // }
// // let a=parseInt(prompt("Enter the number"))
// // let result=persq(a);
// // console.log(result);



// // /////4///////
// function salary(sal)
// {
//     sal=sal+hours*50;
//     return sal;
// }
// let sal=parseInt(prompt("Enter the salary"))
// let hours=parseInt(prompt("Enter the number of extra hours worked"));
// console.log(salary(sal));