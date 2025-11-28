// Asynchronous JavaScript

function myDisplayer(something) {
    console.log(something);
}

function myCalculator(num1, num2, myCallBack) {
    let sum = num1 + num2;
    myCallBack(sum);
}

myCalculator(5, 5, myDisplayer); // Output: 10


// Waiting for a Timeout
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

setTimeout(myFunction, 3000); // setTimeout() with a Callback

function myFunction() {
    console.log("I Love You");
}

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
setTimeout(function() { myFunc("I Love You!!!"); }, 3000);

function myFunc(value) {
    console.log(value);
}
