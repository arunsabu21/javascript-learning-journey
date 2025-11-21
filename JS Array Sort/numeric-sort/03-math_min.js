// Using Math.min() on an Array
const points = [40, 100, 1, 5, 25, 10];
console.log(myArrayMin(points)); // Output: 1

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}