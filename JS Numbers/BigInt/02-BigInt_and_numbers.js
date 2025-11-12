// Mixing BigInt and Numbers
// Arithmetic between a BigInt and a Number is not allowed (will result in a TypeError).
// let x = 10n;
// let y = 5;
// let z = x + y;
// console.log(z); Output: TypeError

// To fix that, explicitly convert one:
let x = 10n;
let y = 5;
let z = Number(x) + y;
console.log(z);
