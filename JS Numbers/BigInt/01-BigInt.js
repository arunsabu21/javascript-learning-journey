// JavaScript BigInt

/*
What is JavaScript BigInt?
BigInt is a JavaScript data type for handling and storing big integer values.

BigInt allows you to work with integers larger than the limit of Numbers.

BigInt can represent an integer of any size, limited only by available memory.
*/

// JavaScript Accuracy
// JavaScript Numbers are only accurate up to 15 digits:

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits:
// Example:
let x = 999999999999999;   // Accurate (15 digits)
let y = 9999999999999999;  // Inaccurate (16 digits)

console.log("Accurate: " + x + " " + "Inaccurate: " + y);

// // Use BigInt for very large numbers:
// let z = 9999999999999999n; // Accurate BigInt
// console.log(z);

// // MAX = 9007199254740991
// let x = Number.MAX_SAFE_INTEGER;

// // MIN = -9007199254740991
// let y = Number.MIN_SAFE_INTEGER;

// BigInt is a JavaScript Datatype
// The JavaScript typeof a BigInt is "bigint":
let a = BigInt("9999999999999999");
let type = typeof x;
console.log(type);