const person1={
    firstname : "puskar",
    lastname:"thapa",
    address:{
        city: "butwal",
        country: "nepal"
    },
    isEmployed: true,
    eats: () => ("eats momo"),
    study: function() {return("studies CSIT")},
};
console.log(person1.firstname)
console.log(person1.firstname+" is employed?"+ person1.isEmployed);
console.log(person1.firstname+" "+person1.lastname+" lives in "+person1.address+" and "+person1.eats()+" and "+person1.study()) ;
console.log(person1.address.city)
person1.address.wardno=10;
console.log(person1.address.wardno)
console.log(Object.entries(person1))
console.log(Object.keys(person1))

/*
seal-
freeze-
values-
keys-
*/ 