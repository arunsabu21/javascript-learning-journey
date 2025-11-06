// JavaScript Numbers

/*
Number Types
JavaScript has only one type of number.

Numbers can be written with or without decimals.
*/
let x = 3.14; // A number with decimals
let y = 3; // A number without decimals
console.log(x+ " " + y)

// Extra large or extra small numbers can be written with scientific (exponent) notation:
let x1 = 123e5;
let y1 = 123e-5;
console.log(x1 + " " + y1)

// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits:
let x2 = 999999999999999;
let y2 = 9999999999999999;
console.log("Accurate: " + x2 + " " + "Inaccurate: " + y2 )

// Floating Precision
// Floating point arithmetic is not always 100% accurate.
let x3 = 0.2 + 0.1;
console.log("0.2 + 0.1 = " + x3)
// To solve the problem above, it helps to multiply and divide:
let num = 0.2 + 0.1;
console.log("0.2 + 0.1 = " + num)
let solution = (0.2*10 + 0.1*10) / 10;
console.log("0.2 + 0.1 = " + solution)
