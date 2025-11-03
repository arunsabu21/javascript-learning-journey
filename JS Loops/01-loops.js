// JavaScript Loops

/*
Loops can execute a block of code a number of times.

Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:
*/

// The for Loop

// Index →  0       1       2       3       4       5
// Value → "BMW"  "Volvo" "Saab" "Ford" "Fiat" "Audi"

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let t = "";
for (let i = 0; i < cars.length; i++) {
  t += cars[i] + " ";
}

console.log(t)

const fruits = ["Apple", "Orange", "Cherry", "Kiwi", "Mango"]

let text = "";
for (let i = 0; i < fruits.length; i++) {
  text += fruits[i] + " ";
}

console.log(text)


let x = "";
for (let i = 0; i < 5; i++) {
  x += "The Number is " + i
}
console.log(x)

// The while loop

// Syntax:
// while (condition) {
//   Code block to be executed
// }

let a = "";
let i = 0;
while (i < 10) {
  a += "The number is " + i + " ";
  i++; // ✅ increase i each loop
}
console.log(a);


// The Do While Loop

/*
The do while loop is a variant of the while loop.

The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
*/

// Syntax:

// do {
 // code block to be executed
// }
// while (condition);


