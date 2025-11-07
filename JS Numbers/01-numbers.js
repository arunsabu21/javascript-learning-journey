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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Adding Numbers and Strings

// JavaScript uses the + operator for both addition and concatenation.

// Numbers are added. Strings are concatenated.

let a = 10;
let b = 20;
let c = a + b;
console.log(c)

// If you add two strings, the result will be a string concatenation:
let string1 = "10";
let string2 = "20";
let totalS = string1 + string2;
console.log(totalS)

// If you add a number and a string, the result will be a string concatenation:
let n = 10;
let s = "20";
let result = n + s;
console.log(result)

// Numeric Strings
// JavaScript strings can have numeric content:

// JavaScript will try to convert strings to numbers in all numeric operations:
let s1 = "100";
let s2 = "10";
let s3 = s1 / s2;
console.log(s3)

// * and - works but not + works


/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
*/
console.log(100/"Apple")

// A number divided by a numeric string becomes a number:
console.log(100/"10")

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
let nan = 100/"Apple";
console.log(isNaN(nan))

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  txt = txt + myNumber + " ";
}

console.log(txt)

// Division by zero generates Infinity;
let nuM1 = 2/0;
let nuM2 = -2/0;
console.log(nuM1 + " " + nuM2)

// Infinity is a number: typeof Infinity returns number.
console.log(typeof(Infinity))

// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
// Numeric constants, preceded by 0x, are interpreted as hexadecimal:
let hexaDecimal = 0xFF;
console.log("0xFF = " + hexaDecimal)

/*
In JavaScript:

Numbers starting with 0x = Hexadecimal (base 16)

Hex digits: 0–9 + A–F

A = 10, B = 11, … F = 15

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
*/

let myNum = 32;
console.log(
  "Decimal 32 =" + "\n" +
  "Hexatrigesimal (base 36): " + myNum.toString(36) + "\n" +
  "Duotrigesimal (base 32): " + myNum.toString(32) + "\n" +
  "Hexadecimal (base 16): " + myNum.toString(16) + "\n" +
  "Duodecimal (base 12): " + myNum.toString(12) + "\n" +
  "Decimal (base 10): " + myNum.toString(10) + "\n" +
  "Octal (base 8): " + myNum.toString(8) + "\n" +
  "Binary (base 2): " + myNum.toString(2)
);

// JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals:
let number = 123;

// But numbers can also be defined as objects with the keyword new:
let number1 = new Number(123);

let number2 = 123; // x is a number
let number3 = new Number(123); // y is a Number object
console.log(typeof number2 + " " + typeof number3)

// When using the == operator, x and y are equal:
let num1 = 500; // x is a number
let num2 = new Number(500); // y is a Number object
console.log(num1 == num2)

// When using the === operator, x and y are not equal.
let num3 = 500;
let num4 = new Number(500);
console.log(num3 === num4)


