const accountId = 144553
let accountEmail = "pradeepta@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 5 //not allowed

accountEmail = "pradeepta@gmail.com"
accountPassword = "54321"
accountCity = "Balasore"

console.log(accountId); // for single print

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity , accountState]) //at a time print in a table

