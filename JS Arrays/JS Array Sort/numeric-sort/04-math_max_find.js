// Using Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:

const points = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(points)); 

function myArrayMax(arr) {
    return Math.max.apply(null, arr)
}