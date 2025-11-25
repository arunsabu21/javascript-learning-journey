/*
The entries() Method
The entries() method returns an Iterator with [value,value] pairs from a Set.

Note
The entries() method is supposed to return a [key,value] pair from an object.

A Set has no keys, so the entries() method returns [value,value].

This makes Sets compatible with Maps.
*/

const letters = new Set(["a", "b", "c"]);

const myIterator = letters.entries();

let text = "";
for (const x of myIterator) {
    text += x + "\n";
}
console.log(text);

// Output:
// a,a
// b,b
// c,c