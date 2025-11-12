// JavaScript BigInt Conversion
// BigInt can store very large integers beyond Number.MAX_SAFE_INTEGER.
// But converting BigInt to Number may lose precision.

let largeNumber = BigInt("12345678901234567890");  // Accurate BigInt
let num = Number(largeNumber);                     // Converts to Number (inaccurate)
console.log(num);  // Output: 12345678901234567000 (rounded)
