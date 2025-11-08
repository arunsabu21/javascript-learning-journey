// The toString() Method
// The toString() method returns a number as a string.

// All number methods can be used on any type of numbers (literals, variables, or expressions):
let x = 123;
let result = x.toString() + (123).toString() + " " + (100 + 23).toString();
console.log(result);

// The toString() method can take an optional radix argument to convert the number to a different base:
let y = 123;
let text = y.toString(2);
console.log(text)

/*
64 | 32 | 16 | 8 | 4 | 2 | 1
 1 |  1 |  1 | 1 | 0 | 1 | 1
*/

// Another problem:
let a = 57;
let txt = a.toString(2);
console.log(txt)

/*
32  16  8   4   2   1
 1   1   1   0   0   1
*/
