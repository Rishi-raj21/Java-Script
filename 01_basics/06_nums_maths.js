const score = 400
console.log(score)                  //400

const balance = new Number(100)     //[Number: 100]     object defined with protype as number
console.log(balance);
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2));        //upto two places of decimal

const othernumber = 23.8966
console.log(othernumber.toPrecision(3))     //23.6
const othernumber1 = 123.8966
console.log(othernumber1.toPrecision(3))    //124

const hundreds = 1000000
console.log(hundreds.toLocaleString())
