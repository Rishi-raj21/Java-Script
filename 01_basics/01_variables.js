const accountId = 144553
let accountEmail = "rajat@gmail.com"
var accountPassword= "12345"
accountCity="Jaipur"

// accountId=2 // Not allowed

accountEmail="rishi@gmail.com"
accountPassword="123456789"
accountCity="Delhi"

/*
Don't use var because of scope issues. Better prefer let
*/

console.table([accountId, accountEmail, accountPassword, accountCity])