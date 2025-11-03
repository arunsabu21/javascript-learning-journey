// JavaScript For Loop

/*
For Loops can execute a block of code a number of times.

For Loops are fundamental for tasks like performing an action multiple times.


for (exp 1; exp 2; exp 3) {
   code block to be executed
}

exp 1 is executed (one time) before the execution of the code block.

exp 2 defines the condition for executing the code block.

exp 3 is executed (every time) after the code block has been executed.
*/

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i] + " ";
}

console.log(text)

/*
exp 1 sets a variable before the loop starts (let i = 0).

exp 2 defines the condition for the loop to run (i must be less than 5).

exp 3 increases a value (i++) after the code block has been executed.
*/

const c = ["BMW", "Volvo", "Saab", "Ford"];
let l = c.length;

let t = "";
for (let i = 0; i < len; i++) {
  t += cars[i] + " ";
}

console.log(t)

/*
How to use exp 1
exp 1 is used to initialize the variable(s) used in the loop (let i = 0).

exp 1 is optional.

You can omit exp 1 if the value is set before the loop starts
*/

const a = ["BMW", "Volvo", "Saab", "Audi"]
let b = a.length;

let d = 2;

let txt = "";
for (; d < b; d++) {
  txt += a[d] + " ";
}
console.log(txt)

/*
How to use exp 2
exp 2 is used to evaluate the condition of the initial variable (i < len).

exp 2 is also optional.

If exp 2 returns false, the loop will end.
*/

/*
How to use exp 3
exp 3 increments the value of the initial variable (i++).

exp 3 is optional.

exp 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

exp 3 can be omitted (if you increment the value inside the loop):
*/

