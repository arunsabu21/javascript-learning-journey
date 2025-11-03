// The Conditional (Ternary) Operator

// If the value of age is < 18, set the value of text to "Minor", otherwise to "Adult":
let age = 16;
let text = (age < 18) ? "Minor" : "Adult";
console.log(text)

let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount);

console.log("The price is"  + total)



let mark = 24;
let result = (mark >= 24) ? "Passed" : "Failed";
console.log(result)

// The conditional operator is a shorthand for writing conditional if...else statements.