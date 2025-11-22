// JavaScript Array Rest (...)
// The rest operator (...) allows us to destruct an array and collect the leftovers:
let a, rest;
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
[a, ...rest] = array1;
console.log(rest); // Output: [2, 3, 4, 5, 6, 7, 8]
