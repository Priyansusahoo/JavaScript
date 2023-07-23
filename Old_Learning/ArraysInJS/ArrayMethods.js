/**
 * In-built Js Array Methods
 */
var arr2 = [12, 14, 56, 57];
console.log("Default array =", arr2);
/**
 * Pop method ---
 */
// This will remove element from end of array
var c = arr2.pop();
console.log("Element removed, using Pop method=", c);
console.log("After Pop method used ", arr2);

/**
 * Push Method ---
 */
var b = arr2.push(100);
console.log("Push Method is used ", arr2);

/**
 * Shift method ---
 */
// This will remove element from start of array
var d = arr2.shift();
console.log("Element removed using shift method =", d); // Catch the element which will be removed
console.log("After shift method, array =", arr2);

/**
 * Unshift method ---
 */
// Added the value at the starting of the array
var c = arr2.unshift(10);
console.log("After unshift method, array =", arr2);
