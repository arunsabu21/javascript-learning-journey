// JavaScript Array Spread (...)
// The ... operator expands an array into individual elements.

// This can be used join arrays:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];
console.log(array3); // Output: [ 1, 2, 3, 4, 5, 6 ]