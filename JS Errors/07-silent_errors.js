/*
Silent Errors
JavaScript can fail silently.

A silent error will not stop your program. The execution will continue.

The reason for silent errors is historical:

The first version of JavaScript did not have catch...try exceptions.
*/

let x = 1 / 0;
console.log(x); // Output: Infinity


let isActive = false;

if (isActive = true) { // Assignment, not comparison
    let result = "Active";
    console.log(result); // Output: Active
}
// The = assigns true instead of checking equality.
// The next line runs silently and prints "Active!", even though isActive is false.
