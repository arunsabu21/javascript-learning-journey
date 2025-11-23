// Map.set()
// You can add elements to a map with the set() method:

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

let numb = fruits.get("apples");
console.log(numb);

// The set() method can also be used to change existing map values:
const fruitsList = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruitsList.set("apples", 200);

let n = fruitsList.get("apples");
console.log(n);
