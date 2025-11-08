// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:
let x = 9.656;
let precision = x.toPrecision();
let precision2 = x.toPrecision(2);
let precision4 = x.toPrecision(4);
let precision6 = x.toPrecision(6);
console.log(precision + " " + precision2 + " " + precision4 + " " + precision6)