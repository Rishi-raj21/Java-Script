//  Stack(Primitive)        Heap(Non-Primitive)
let myYTname = "thelostmelodies"
let anothername = myYTname
anothername = "failed"

console.log(myYTname)
console.log(anothername)

//HEAP

let userone={
    email: "user@gmail.com",
    upi:"user@ybl"
}

let usertwo= userone
usertwo.email = "rdd@gmail.com"
console.log(userone.email)
console.log(usertwo.email)