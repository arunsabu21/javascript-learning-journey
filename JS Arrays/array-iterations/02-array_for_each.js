// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

// The forEach() Method
const numbers = [45, 4, 9, 16, 25];

let text = "";
numbers.forEach(myFunction);
console.log(text);

function myFunction(value, index, array) {
    text += value + "\n";
}

