let score = "33abc"

// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// Basic Conversion:

/**
 * "33" => 33
 * "33abc" => NaN ---> {Not a Number}
 * true => 1;
 * false => 0;
 */

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// Other Conversion:

/**
 * 1 => true;
 * 0 => flase;
 * "" => false;
 * "abc" => true;
 */

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);