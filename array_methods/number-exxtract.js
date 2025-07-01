let mixedArray = [1, "hello", 2 , "beggar",3,4,5,"aayush"]
newArray = mixedArray.filter((item)=>{
    return typeof item == "number"; 
})
console.log(newArray)
