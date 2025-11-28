/*
JavaScript Control Flow
Control Flow is the order in which statements are executed in a program.

By default, JavaScript runs code from top to bottom and left to right.

Control flow statements let you change that order, based on conditions, loops or keywords.

Default Flow
Default flow executes code sequentially (from top to bottom / from left to right).
*/

// Flow sequentially: let x → let y → let z.
let x = 5;
let y = 6;
let z = x + y;
console.log(z);


/*
Conditional Control Flow
Conditions let you make decisions using:

if
if...else
switch
ternary (? :)
*/

let age = 18;
let text = "Unknown";

if (age >= 18) {
    text = "Adult";
} else {
    text = "Minor";
}

console.log(text); // Output: Adult