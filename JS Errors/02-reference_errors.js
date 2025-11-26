/*
Reference Errors
A ReferenceError occurs if you use (reference) a variable that does not exist.

ReferenceError	fname = foo;	foo is not defined

ReferenceError	let x = y;
let y = 5;	Cannot access y before initialization
*/

let x = 5;
try {
    x = y + 1;
} catch(err) {
    let text = err.name + " " + err.message;
    console.log(text); // Output: ReferenceError y is not defined
}


// Cannot access a variable before initialization:
try {
    let a = b;
    let b = 5;
} catch(err) {
    let text = err.name + " " + err.message;
    console.log(text); // Output: ReferenceError Cannot access 'b' before initialization
}