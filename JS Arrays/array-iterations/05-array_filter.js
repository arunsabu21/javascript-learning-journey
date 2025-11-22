// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

// This example creates a new array from elements with a value larger than 18:
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

console.log(over18); // Output: [ 45, 25 ]

function myFunction(value) {
    return value > 18;
}
