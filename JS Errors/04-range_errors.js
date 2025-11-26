// JavaScript Range Errors
// A RangeError occurs when a value is out of its valid range.

// You cannot set the number of array elements to -1:
try {
    new Array(-1);
} catch(err) {
    let error = err.name + " " + err.message;
    console.log(error); // Output: RangeError Invalid array length
}


// You cannot set the number of significant digits of a number to 500:
let num = 1;
try {
    num.toPrecision(500);
} catch(err) {
    let error = err.name + " " + err.message;
    console.log(error); // Output: RangeError toPrecision() argument must be between 1 and 100
}