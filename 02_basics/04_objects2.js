//SINGLETON (using constructor)

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

console.log(tinderUser)

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
console.log(regularUSer.fullname)

//COMBINING OBJECTS