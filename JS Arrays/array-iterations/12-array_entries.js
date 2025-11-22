// JavaScript Array entries()

// Create an Array Iterator, and then iterate over the key/value pairs:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
    console.log(x += "\n");
}

// The entries() method returns an Array Iterator object with key/value pairs:
/*
0,Banana

1,Orange

2,Apple

3,Mango
*/

// The entries() method does not change the original array.