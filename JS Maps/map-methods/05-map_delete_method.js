// Map.delete()
// The delete() method removes a map element:

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Delete an Element
fruits.delete("apples");

console.log(fruits.size); // Output: 2