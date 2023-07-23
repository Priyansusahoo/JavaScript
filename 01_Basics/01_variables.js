const accountId = 14487238
let accountEmail = "priyansu@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar" // --> Not recommended
let accountState; // --> undefined
// accountId = 2 --> Not Allowed

/**
 * var is not recommended anymore
 * just use const and let to declare variable.
 */
accountEmail = "priyansu1@gmail.com"
accountPassword = "34324556"
accountCity = "Hydrabad"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])