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
// console.log(stringNumber);
// console.log(typeof stringNumber);

/**
 * OPERATIONS
 */
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// // Important Concept:
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// // ---

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // 1
/**
 * Will be 1 because by adding '+' symbol at start 
 * it will be converted to numberic value i.e 1.
 */
// console.log(+""); 
/**
 * 0 {because empty string is false and by adding '+' 
 * it will be converted to numberic value}. 
 */
  let num1, num2, num3

  num1 = num2 = num3 = 2 + 2

  let gameCounter = 100;
//   gameCounter++;
  ++gameCounter;
  console.log(gameCounter);