// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFunction() {
  fruits.push("Lemon");
}

myFunction();  

console.log(fruits);

// New element can also be added to an array using the length property:
const fruitList = ["Banana", "Orange", "Apple", "Mango"];

function addArray() {
  fruitList[fruitList.length] = "Lemon";
}

addArray();

console.log(fruitList); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Lemon' ]

// Adding elements with high indexes can create undefined "holes" in an array:
const list = ["Banana", "Orange", "Apple"];
list[10] = "Mango";
console.log(list); // Output: [ 'Banana', 'Orange', 'Apple', <7 empty items>, 'Mango' ]
