// JavaScript Scope

/*
Scope = Visibility
Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

Global scope
Function scope
Block scope
*/


/*
Global Scope
Variables declared Globally (outside any block or function) have Global Scope.

Global variables can be accessed from anywhere in a JavaScript program.

Variables declared with var, let and const are quite similar when declared outside a block.

They all have Global Scope:

var x = 1;    // Global scope

let y = 2;    // Global scope

const z = 3;  // Global scope
*/

// A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
myFunction();

function myFunction() {
    console.log(carName); // Output: Volvo
}

// Global variables has Global Scope:
// All scripts and functions in the same web page can access a variable with global scope.