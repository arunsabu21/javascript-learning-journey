/*
The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.
*/
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));

/*
Number.isSafeInteger(10)                           → true
Number.isSafeInteger(999999999999999)              → true   (safe)
Number.isSafeInteger(9007199254740991)             → true   (max safe)

Number.isSafeInteger(9007199254740992)             → false  (unsafe)
Number.isSafeInteger(12345678901234567890)         → false  (too big)
Number.isSafeInteger(10.5)                         → false  (not integer)
Number.isSafeInteger("10")                         → false  (string)
*/

