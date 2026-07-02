const marvel = ["Thor", "IronMan", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

//marvel.push(dc)
//console.log(marvel)  //Array in Array (Took whole array as an element)

//marvel.concat(dc)    //Same
//console.log(marvel)

const heros = marvel.concat(dc)
console.log(heros)   //New  Array with all elements of both arrays(Problrm solved)

//another way (more preferred)
const allheros = [...marvel, ...dc]
console.log(allheros)

const ArrInArr = [1,2,3,[4,5],6,[7,8,[9,10]]]
console.log(ArrInArr)
const realArr = ArrInArr.flat(Infinity)
console.log(realArr)

console.log(Array.from("Rajat"))