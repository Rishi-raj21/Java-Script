//let score = "33abc"
//let score = null    //OBJECT OBJECT NUMBER 0
//let score = undefined  //UNDEFINED UNDEFINED NUMBER NaN
let score = true    //BOOLEAN BOOLEAN NUMBER 1  

console.log(typeof score);
console.log(typeof (score));
//const {score} = req.body

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(valueInNumber)  //NOT A NUMBER

// "33" -> 33
// "33abc" -> NaN(Not a number)
//  true -> 1   false -> 0

//let isLoggedIn = 1  //True
//let isLoggedIn = ""   //False
let isLoggedIn = "Rajat"  //True

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringnumber = String(someNumber)
console.log(stringnumber)
console.log(typeof stringnumber)