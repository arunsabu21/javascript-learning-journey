// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce a single value.

// The reduce() method works from left-to-right in the array.

// Find the sum of all numbers in an array:
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

console.log(sum); // Output: 99

function myFunction(total, value) {
    return total + value;
}