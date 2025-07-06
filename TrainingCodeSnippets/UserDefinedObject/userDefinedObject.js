
// //Syntax:
// // const objectName = {
// //   property1: value1,
// //   property2: value2,
// //   method1: function() {
// //     // code to execute
// //   }
// // };
// // let user = "Dinesh"
// // console.log(user.length)

// const student = {
//   name: "Dinesh",
//   age: 23,
//   course: "BCA",
//   greet: function (a,b) {
//     return a+b
//   }
// };
// console.log(student.age)
// console.log(student.greet("Nyaupane ","Dinesh")); 

// // User object
// const user = {
//   name: "Bikash Thapa",
//   phone: "9801234567",
//   orderHistory: [],
  
//   viewOrderHistory: function () {
//     if (this.orderHistory.length === 0) {
//       console.log("No orders placed yet.");
//     } else {
//       console.log(`\n--- Order History for ${this.name} ---`);
//       this.orderHistory.forEach((order, index) => {
//         const items = order.items.map(i => i.name).join(", ");
//         console.log(`${index + 1}. Items: ${items} | Total: Rs.${order.total} | Time: ${order.time}`);
//       });
//     }
//   }
// };

// // Restaurant object
// const restaurant = {
//   name: "New Taste Kitchen",
//   location: "Pokhara",
//   menu: [
//     { name: "Momo", price: 120 },
//     { name: "Chowmein", price: 150 },
//     { name: "Cold Coffee", price: 90 }
//   ],

//   showMenu: function () {
//     console.log(`\n--- ${this.name} Menu ---`);
//     this.menu.forEach((item, index) => {
//       console.log(`${index + 1}. ${item.name} - Rs.${item.price}`);
//     });
//   },

//   placeOrder: function (userObj, itemIndexes) {
//     const selectedItems = itemIndexes.map(i => this.menu[i]);
//     const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
//     const time = new Date().toLocaleString();

//     const order = {
//       items: selectedItems,
//       total: total,
//       time: time
//     };

//     userObj.orderHistory.push(order);
//     console.log(`\n Order placed for ${userObj.name}`);
//     console.log(`Items: ${selectedItems.map(i => i.name).join(", ")}`);
//     console.log(`Total: Rs.${total}`);
//   }
// };




//


const person = {
    username : "person",
    phone:985555555,
    display:function(){
        console.log("This is function inside object")
    }
    
}


// person.age=18;
// console.log(person.age)
// delete person.age
// let array = [1,2,3,4,5]
// for (let key in array){
//     console.log(array[key])
// }

let details = {
    username:"Dinesh"
}



// console.log(details.address.city)
// console.log(details)

// delete details.address.wardNo
// console.log(details)

let fruits = {
    ft1:"apple",
    ft2:"banana"
}
// console.log(fruits)


//hasProperty
// console.log(Object.hasOwn(fruits,"ft3"))

/* 
in -> check if property exists and return true/false
hasOwn->
keys->
values->
entries->
freeze->
seal->
getOwnPropertyDescriptors->
defineProperty->
*/
// console.log(Object.getOwnPropertyDescriptors(fruits))

// console.log("display" in person)
Object.freeze(person)
person.username="Suman"
person.nationality="Nepali"
console.log(Object.getOwnPropertyDescriptors(person))
console.log(Object.getOwnPropertyDescriptors(details))


//Seal