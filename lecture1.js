console.log("Harsh")
const accountId = 14454  //DON'T CHANGE
let accountEmail = "Harsh@google.com"
var accountpassword = "12345"
accountcity = "LUCKNOW"
let accountstate;
/*
prefer not to use var because of issue in block scope and unctional scope
only used const and let only 
but for changing value you should use let
*/

//accountId = 2

console.log(accountId)
accountEmail = "HARSH@.com"
accountpassword = "5424"
accountcity = "delhi"
console.log(accountId)
console.table([accountEmail,accountId,accountcity,accountpassword])