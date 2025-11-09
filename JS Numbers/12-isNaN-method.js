// The Number.isNaN() Method
// The isNaN() method returns true if the argument is NaN (Not a Number).
let result = Number.isNaN(123);
console.log(result);

/*
Number.isNaN(NaN)        → true
Number.isNaN(0 / 0)      → true   // 0/0 is NaN

Number.isNaN(123)        → false
Number.isNaN("123")      → false
Number.isNaN("hello")    → false
Number.isNaN(undefined)  → false
Number.isNaN(Infinity)   → false
*/