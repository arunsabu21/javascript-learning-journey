// The else Statement
// Use the else statement to specify a block of code to be executed if a condition is false.

// if (condition) {
//  block of code to be executed if the condition is true
// } else {
//  block of code to be executed if the condition is false
// }

// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good Day !";
} else {
  greeting = "Good Evening !";
}

console.log(greeting)

// The else if Statement
// Use the else if statement to specify a new condition if the first is false.

// if (condition1) {
//  block of code to be executed if condition1 is true
// } else if (condition2) {
// block of code to be executed if the condition1 is false and condition2 is true
// } else {
// block of code to be executed if the condition1 is false and condition2 is false
// }

const time = new Date().getHours();
let x;

if (time < 10) {
  x = "Good Morning";
} else if (time < 20) {
  x = "Good Day";
} else {
  x = "Good Evening";
}

console.log(x)

// JavaScript Math.random()

let l;
if (Math.random() < 0.5) {
  l = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  l = "<a href='https://wwf.org'>Visit WWF</a>";
}

console.log(l)