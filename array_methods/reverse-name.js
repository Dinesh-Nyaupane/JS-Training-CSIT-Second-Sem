username="Rohit Nyaupane"
newUsername = username.split("")
reversed = newUsername.reduceRight((rev,curr)=>rev+curr , "")
console.log(reversed)