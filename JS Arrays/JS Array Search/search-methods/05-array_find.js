// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

console.log("First Number over 18 is " + first); // Output: First Number over 18 is 25

function myFunction(value, index, array) {
  return value > 18;
}