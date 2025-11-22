// JavaScript Array some()
// The some() method checks if some array values pass a test.

// This example checks if some array values are larger than 18:
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

console.log("Some over 18 is " + someOver18);

function myFunction(value) {
    return value > 18;
}