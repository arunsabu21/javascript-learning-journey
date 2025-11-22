// JavaScript Array keys()
// The Array.keys() method returns an Array Iterator object with the keys of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
    text += x + "\n";
}

console.log(text); // Output: 0 1 2 3
