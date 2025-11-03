// JavaScript Logical Operators

/*
Logical Operators
Logical operators are used to combine boolean expressions.

Logical operators can be used to modify the results of comparisons.

Typically, you will use a comparison operator to check a condition, and a logical operator to combine conditions into more complex logic.
*/

// JavaScript Logical AND

// The && (AND) Operator
let x = 6;
let y = 3;
console.log(x < 10 && y > 1)
console.log(x < 10 && y < 1)

// The || (OR) Operator
// The || operator returns true if one or both expressions are true, otherwise false:
let a = 6;
let b = -3;
let c = (x > 0 || y > 0)
console.log(c)

// The ! (NOT) Operator
console.log(5 == 8)
console.log(!(5 == 8));

// The ?? Operator
// The ?? operator returns the right operand when the left operand is nullish (null or undefined), otherwise it returns the left operand.
let name = null;
let text = "missing";
let result = name ?? text;
console.log("The name is " + result)