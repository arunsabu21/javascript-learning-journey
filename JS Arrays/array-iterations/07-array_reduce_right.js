// JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce a single value.

// The reduceRight() works from right-to-left in the array.

// This example finds the sum of all numbers in an array:
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

console.log(sum); // Output: 99

function myFunction(total, value) {
    return total + value;
}