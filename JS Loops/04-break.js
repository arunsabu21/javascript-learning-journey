// JavaScript Break

/*
The Break Statement
The break statement "jumps out" of loops and switches.

The break statement terminates the execution of a loop or a switch statement.
*/

// Break the loop when the loop counter is 3:

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is" + i + " ";
}

console.log(text)

// The break Statement in a Switch

let day;
switch (new Date().getDay()) {
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

console.log("Today is " + day)

// JavaScript Labels

// A label provides a name for a statement, or a block of statements, allowing statements to be referenced to, for program flow control, particularly in loops.

/*
Syntax
A label is an identifier followed by a colon (:).

labelname: statement;
A label precedes a statement or a block of code.

labelname: {
  statements
}

Labeled Break
Syntax
break labelname;
The break statement exits a loop or block and transfers the control to the labeled statement.

The break statement is particularly useful for breaking out of inner or outer loops from nested loops.
*/

// Break the loop when the loop counter is 3:

let t = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop1; }
    t += i + " ";
  }
}
console.log(t)

const cars = ["BMW", "Bugatti", "Porsche", "Ferrari"]

let e = "";

list: {
  e += cars[0] + " ";
  e += cars[1] + " ";
  break list;
  e += cars[2] + " ";
  e += cars[3] + " ";
}
console.log(e)

