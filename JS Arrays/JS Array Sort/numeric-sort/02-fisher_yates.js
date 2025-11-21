/*
The Fisher Yates Method
The points.sort() method in the example above is not accurate. It will favor some numbers over others.

The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

In JavaScript the method can be translated to this:
*/

function shuffle(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j] = arr[j], arr[i]];
    }
}

const points = [40, 100, 1, 5, 25, 10];
shuffle(points);
console.log(points);
