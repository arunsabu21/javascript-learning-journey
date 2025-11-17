// Looping Array Elements
// One way to loop through an array, is using a for loop:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let text = "";
for (let i = 0; i < fLen; i++) {
  text += fruits[i] + "\n";
}
console.log(text);

// You can also use the Array.forEach() function:
// The forEach() Method
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let text1 = "";
fruits1.forEach(myFunction);

console.log(text1);

function myFunction(value) {
  text1 += value + "\n";
}
