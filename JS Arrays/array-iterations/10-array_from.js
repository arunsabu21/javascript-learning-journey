// JavaScript Array.from()
// The Array.from() method returns an Array object from:

// Any iterable object

// Any object with a length property

// Create an Array from a String:
let text = "ABCDEFG";
const myArr = Array.from(text);
console.log(myArr);

// Array.from() has an optional parameter which allows you to execute a function on each element of the new array:
// Create an Array from an Array:
const myNumbers = [1, 2, 3, 4];
const Arr = Array.from(myNumbers, x => x * 2);
console.log(Arr); // Output: [ 2, 4, 6, 8 ]