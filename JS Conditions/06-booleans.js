// JavaScript Booleans

/*
The Boolean Data Type
In JavaScript, a Boolean is a primitive data type that can only have one of two values:

true or false

The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
*/

/*
Key Boolean Characteristics
true and false are boolean data types
true and false are the only possible boolean values
true and false must be written in lowercase
true and false must be written without quotes
*/

/*
Boolean Use Cases
Very often, in programming, you will need a data type that can represent one of two values, like:

yes or no
on or off
true or false
Boolean values are fundamental for logical operations and control flow in JavaScript programming.
*/

// Use Case: Equality

let x = 8;
console.log(x == 6)

let a = 5;
console.log(a == 8)

// Use Case: if .. else

const hour = new Date().getHours();
let greetings;

if (hour < 18) {
  greetings = "Good day!";
} else {
  greetings = "Good Evening";
}

console.log(greetings)

// Use Case: While Loop

let text = "";
let i = 1;

while (i < 10) {
  text += i;
  i++;
}
console.log(text)

// The Boolean() Function
// You can use the Boolean() function to find out if an expression (or a variable) is true:

console.log(10 > 9) // true

// n is a boolean
let n = false;
// y is a object
let y = new Boolean(false);
console.log(typeof n + typeof y)


