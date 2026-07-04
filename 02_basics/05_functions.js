function addTwoNumbers(a, b){
    //let c = a+b
    return c = a+b
}
const result = addTwoNumbers(3,5)
console.log("Result: ", result)

function login(username){
    if(username === undefined){ //      if(undefined) or if(!username)
        console.log("Enter a valid username")
    }
    else
    return `${username} just logged in`
}

console.log(login())
console.log(login("Rajat"))

//Arrays 
console.log()

function calCartPrice(...num1){
    return num1
}
console.log(calCartPrice(200,400,500))