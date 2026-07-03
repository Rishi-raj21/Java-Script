//SINGLETON (when made using constructor, made particular)
//Constructor Method- object.create
//OBJECT LITERALS

const mySymbol = Symbol()

const JSUser = {
    "full name" : "Rajat",
    name : "rishi",
    [mySymbol] : "mykey1", 
    age : 18,
    location : "Gorakhpur",
    email : "rdd@gmail.com",
    isLoggedIn : false,
}
//How to access

//console.log(JSUser.email)   //Not the right way, though could be used
console.log(JSUser["email"])    //In double quotes bcoz email is treated as string
console.log(JSUser["full name"])    //cant be used with JSUser.full name cox of space
console.log(JSUser[mySymbol])

JSUser.email = "rdd@abhibadlega.com"
//Object.freeze(JSUser)      //Now we cant change the value
JSUser.email = "rdd@abnhibadlega.com"   //this value isnt propagated as freezed
console.log(JSUser["email"])

//Now lets add af unction -> it is treated as a variable in object

JSUser.greetings = function(){      //unfreeze the object
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JSUser.greetings())