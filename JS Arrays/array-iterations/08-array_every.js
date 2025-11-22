// JavaScript Array every()
// The every() method checks if all array values pass a test.

// This example checks if all array values are larger than 18:
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

console.log(allOver18); // Output: false

function myFunction(value) {
    return value > 18;
}