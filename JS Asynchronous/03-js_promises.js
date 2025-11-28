// JavaScript Promise Object
// A Promise contains both the producing code and calls to the consuming code:

/*
Promise Object Properties
A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.
*/

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("OK"); // → Promise becomes fulfilled
  } else {
    myReject("Error");
  }
});

myPromise.then(
  (value) => myDisplayer(value),
  (error) => myDisplayer(error)
);
