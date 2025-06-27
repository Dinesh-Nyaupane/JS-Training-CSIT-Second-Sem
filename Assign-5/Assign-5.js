//----------------------------------------------------------------------------------------------
// 1) reverse a string
/*
let string = "Rajiv" ;
let splited_str = string.split("");
let rev_str = splited_str.reverse();
console.log(rev_str.join(""));     // join("") = inverted comma inside this tell about joining char in string
*/

//----------------------------------------------------------------------------------------------
//      2) to count vowel in string

/*
let input = "rajiv" ;
let count = 0;
for(let i = 0 ; i < input.length ; i++)
{
    let ch = input.charAt(i).toLowerCase() ;
    if((ch == "a") || (ch == "e") || (ch == "i") || (ch == "o") || (ch == "u")) 
    {
      count ++ ;
    }

}
console.log(count);
*/

//----------------------------------------------------------------------------------------------
//. 3) to find whether the string is palindrome or not 

/*

let str = prompt("Enter the string you want to check :")
let len = str.length ;
let count = 0 ;
for(let i = 0 ; i < len/2 ; i++)
{
  if(str.charAt(i) == str.charAt(len-i-1))
  {
    count++ ;
  }
}
if(count == len/2)
{
  console.log("The string is palindrome.");
}else{
  console.log("The string is not palindrome. ");
}

*/


//----------------------------------------------------------------------------------------------
/*
4) to count the frequency of the character which is repeated most in the given string  
*/

//     methods - 1 
/*

let str = "rajivchaudhary" ;
let len = str.length ;
let count = 0 ;
let maxcount = 0 ;
for(let i = 0 ; i < len ; i++)
{
  let cmpstr = str.charAt(i) ;
  count = 0 ; // resetting count for each new character
  for(let j = 0 ; j < len ; j++)
  {
    if(str.charAt(j) == cmpstr)
    {
      count++ ;
    }
  }
  if (count > maxcount) {
    maxcount = count;
  }
}
console.log("The count of most repeated character is : "+(maxcount));
*/

//------------------------------------------
//.       METHOD - 2
//------------------------------------------

/*

let str = "rajivchaudhary" ;
let len = str.length ;
let count = 0 ;
let maxcount = 0 ;

for(let i = 0 ; i < len ; i++)
{
  cmpstr = str.charAt(i) ;
  count = str.split(cmpstr).length - 1 ;

  if(count > maxcount)
  {
    maxcount = count ;
  }
}
console.log("The count of most repeated character is : "+(maxcount));

*/
