// Function Invocation ()

/*
The code inside the function will execute when "something" invokes (calls) the function:

When it is invoked (called) from JavaScript code
When an event occurs (a user clicks a button)
Automatically (self invoked)
The () operator invokes a the function
*/

function toCelsius(f) {
  return (5 / 9) * (f - 32);
}

let value = toCelsius(77);
console.log(value); // Output: 25

// 68°F
function toCelsiusOf(a) {
  return (5 / 9) * (a -32);
}

let result = toCelsiusOf(68);
console.log(result); // Output: 20