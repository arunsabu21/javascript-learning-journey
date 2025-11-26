// JavaScript Type Errors
// A Type Error occurs when a value is of the wrong type or an operation is invalid on that type.

try {
    Anna(5);
} catch(err) {
    let error = err.name + " " + err.message;
    console.log(error); // Output: ReferenceError Anna is not defined
}
// Anna() is not a function


// You cannot convert a number to upper case:
let num = 1;
try {
    num.toUpperCase();
} catch(err) {
    let error = err.name + " " + err.message;
    console.log(error); // Output: TypeError num.toUpperCase is not a function
}