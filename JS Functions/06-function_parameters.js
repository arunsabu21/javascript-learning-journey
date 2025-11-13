// Function Parameters and Arguments
// A JavaScript function does not perform any checking on parameter values (arguments).

// function functionName(parameter1, parameter2, parameter3) {
//    code to be executed
// }


/*
Parameter Rules
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received.
*/

// Default Parameters

// If a function is called with missing arguments (less than declared), the missing values are set to undefined.

// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x * y;
}
console.log(myFunction(4));

// Default Parameter Values
// If y is not passed or undefined, then y = 10.
function defaultParameter(x, y = 10) {
  return x + y;
}
console.log(defaultParameter(5));