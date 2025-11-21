// JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

const numbers = [4, 9, 16, 25, 29];
console.log("First number over 18 has index " + numbers.findIndex(myFunction)); // Output: First number over 18 has index 3

function myFunction(value, index, array) {
  return value > 18;
}