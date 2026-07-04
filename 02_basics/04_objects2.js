//SINGLETON (using constructor)

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

//console.log(tinderUser)

//NOW OBJECT IN OBJECT
const regularUSer = {
    email: "some@gmail.com",
    fullname: {                 //nesting
        userfullname: {
            firstname: "Rajat",
            lastname: "Dwivedi"

        }
    }
}
//console.log(regularUSer.fullname)

//COMBINING OBJECTS

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2} 
console.log(obj3)       //tod tod kar jodega

const obj4 = Object.assign({},obj1, obj2)
console.log(obj4)       //ek saath jod dega 8.22
//OR
const obj5 = {...obj1, ...obj2}
console.log(obj5 )
//node 02_basics/04_objects2.js