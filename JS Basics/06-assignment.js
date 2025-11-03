// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.
// Given that x = 10 and y = 5, the table below explains the assignment operators:

// Operator     Example     Same As     Result

// =            x = y       x = y       x = 5

// +=           x += y      x = x + y   x = 15

// -=           x -= y      x = x - y   x = 5

// *=           x *= y      x = x * y   x = 50

// **=          x **= y     x = x ** y  x = 100000

// /=           x /= y      x = x / y   x = 2

// %=           x %= y      x = x % y   x = 0

// :            x:45        size.x      x = 45

// Logical Assignment Operators

// Operator      Example          Result

// &&=           true &&= 10      x = 10

// ||=           false ||= 10     x = 10

// ??=           null ??= 10      x = 10

// The &&= Operator
// The Logical AND assignment operator is used between two values.
// If the first value is true, the second value is assigned.

let x = true;
let y = x &&= 10;
console.log("Value of y is:" + y)

let a = false
let b = a &&= 10;
console.log("Value of b is:" + b)

let c = 1;
let d = c &&= 10;
console.log("The value of d is" + d)

let value1 = 0;
let value2 = value1 &&= 10;
console.log("The value of value2:" + value2)

let first = undefined;
let second = first &&= 10;
console.log("The value of second is" + second)

let n1 = null
let n2 = n1 &&= 10;
console.log("The Value of n2:" + n2)

// The ||= Operator
// If the first value is false, the second value is assigned.

let a1 = false;
let a2 = a1 ||= 10;
console.log("The value of a2 is" + a2)

let b1 = true
let b2 = b1 ||= 10;
console.log("The value of b2", + b2)

let c1 = null
let c2 = c1 ||= 10;
console.log("Value of c2 is:" + c2)

let d1 = undefined;
let d2 = d1 ||= 10;
console.log("Value of d2 is:" + d2)

// The ??= Operator
// The Nullish coalescing assignment operator is used between two values.

let e1;
e1 ??= 10;
console.log("e1 is:" + e1)

let f1 = 0;
f1 ??= 10;
console.log("f1 is:" + f1)

