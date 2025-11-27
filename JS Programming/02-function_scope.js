/*
Function Scope
Each JavaScript function have their own scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:

function myFunction1() {
  var carName = "Volvo";  // Function Scope
}

function myFunction2() {
  let carName = "Volvo";  // Function Scope
}

function myFunction3() {
  const carName = "Volvo";  // Function Scope
}
*/

// Variables declared within a JavaScript function, are LOCAL to the function:
myFunction();

function myFunction() {
    let carName = "Volvo";
    console.log(typeof carName + carName); // Output: stringVolvo
}

console.log(typeof carName + carName); // Output: ReferenceError: carName is not defined