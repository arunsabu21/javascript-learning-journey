// JavaScript Conditionals
// Conditional Statements

// When you write code, you often want to perform different actions for different conditions.

// Conditional statements run different code depending on a true or false condition.

// Conditional statements include:

// if
// if...else
// if...else if...else
// switch
// ternary (? :)

// When to use Conditionals
// Use if to specify a code block to be executed, if a specified condition is true
// Use else to specify a code block to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative code blocks to be executed
// Use (? :) (ternary) as a shorthand for if...else

// The if Statement

if (condition) {
  // code to execute if the condition is true
}

// The else Statement

if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}

// The else if Statement

if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}

// The switch Statement

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

// Ternary Operator (? :)

condition ? expression1 : expression2