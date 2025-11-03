// JavaScript String Templates

// Back-Tics Syntax
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

let text = `Hello World`;
console.log(text);

// With back-ticks, you can use both single and double quotes inside a string:
let text1 = `He's often called "Johnny"`;
console.log(text1);

// Multiline Strings

let text2 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2)

/*
Interpolation

Template Strings allow variables in strings.

Template strings provide an easy way to interpolate variables in strings.

Syntax
${...}
*/

let firstName = "John";
let lastName = "Doe";
let result = `Welcome ${firstName}, ${lastName}!`;

console.log(result)

// Expression Substitution
// Template Strings allow interpolation of expressions in strings:

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)


