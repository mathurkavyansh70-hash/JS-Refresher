const accountId=144553
let accountEmail="mathur.kavyansh@google.com"
var accountPassword="123456"
accountCity="New Delhi"

//var is not recommended to use because it is function scoped and can be redeclared and updated.

// accountId= 2 //not allowed because accountId is a constant variable.
accountEmail="newemail@google.com"
accountPassword="newpassword"
accountCity="New York"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]); 