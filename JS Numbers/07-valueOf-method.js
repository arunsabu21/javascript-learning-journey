// The valueOf() Method
// valueOf() returns a number as a number.
let x = 123;
console.log(x.valueOf())

// Example 2: Number object
let y = new Number(123);
y.valueOf();   // 123 (primitive)
console.log(y)


// The Number() Method
// The Number() method can be used to convert JavaScript variables to numbers:
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));
