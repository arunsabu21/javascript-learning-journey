// JavaScript Switch Statement

/*
Switch Control Flow
Based on a condition, switch selects one or more code blocks to be executed.

switch executes the code blocks that matches an expression.

switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.
*/

// Syntax

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

let day;
let date = new Date().getDay();

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("Today is " + day);

// The default Keyword

let x;
switch (new Date().getDay()) {
  case 6:
    x = "Today is Saturday";
    break;
  case 0:
    x = "Today is Sunday";
    break;
  default:
    x = "Looking forward to the Weekend";
}

console.log(x)

// Common Code Blocks

let a;
switch (new Date().getDay()) {
  case 4:
  case 5:
    a = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    a = "It is Weekend";
    break;
  default:
  a = "Looking forward to the Weekend";
}

console.log(a)