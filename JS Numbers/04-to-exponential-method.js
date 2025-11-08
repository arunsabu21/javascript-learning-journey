/*
The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:
*/
let x = 9.656;
let a = x.toExponential(); // 9.656e+0
let b = x.toExponential(2); // 9.66e+0   (2 digits)
let c = x.toExponential(4); // 9.6560e+0 (4 digits)
let d = x.toExponential(6); // 9.656000e+0 (6 digits)
console.log(a + " " +  b + " " + c + " " + d)

let n = 45.1234;
console.log(n.toExponential(3));
