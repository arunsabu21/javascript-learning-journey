/*
JavaScript Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top.

JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.
*/

x = 5; // hoisted (moved to top)
console.log(x);
var x; // var is hoisted.


// let and const are ALSO hoisted but kept in Temporal Dead Zone (TDZ).

// Meaning:
// They exist but you cannot access them before declaration.

console.log(a); // ReferenceError: a is not defined
a = 5;