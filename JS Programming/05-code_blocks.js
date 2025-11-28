// JavaScript Code Blocks

// Code Blocks and Statements
// Code blocks allows for multiple statements to be treated as a single unit.
// The body of a JavaScript function is always enclosed within a code block:

function myFunction(p1, p2) { // Function to compute the product of p1 and p2
    return p1 * p2;
}
let result = myFunction(4, 3);
console.log(result); // Output: 12

// Code blocks are essential for if statements:
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good Day";
} else {
    greeting = "Good Evening";
}
console.log(greeting);

// Code blocks are essential for loop statements:
let text = "";

for (let i = 0; i < 5; i++) {
    text += i;
}
console.log(text); // Output: 01234

// The While Loop
let txt = "";
let i = 0;
while (i < 10) {
    txt += i;
    i++;
}
console.log(txt); // Output: 0123456789
