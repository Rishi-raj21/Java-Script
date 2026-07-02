const myArr = [0,1,2,3,4,5]         //JS Arrays are resizable ->Not Associative Arrays
//Shallow copy -> changes happen in the same aray
const heros = ["Ironman","Batman"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr)
//console.log(myArr2[2])

//Array Methods
 
myArr.push(6)
console.log(myArr)
myArr.pop
console.log(myArr)

myArr.unshift(9)           //adds element at first index
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr = myArr.join()      //adds as string
console.log(newArr)
console.log(typeof newArr)

// Slice, Splice

console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
const myn2 = myArr.splice(1,3)   //Trims the array and leaves the og array with remaining elements
console.log(myn1)
console.log(myn2)
