// JavaScript String Search

/*
String Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/

// JavaScript String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index)

// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text1 = "Please locate where 'locate' occurs!";
let index2 = text.lastIndexOf("locate");
console.log(index2)

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let text2 = "Please locate where 'locate' occurs!";
let index3 = text2.indexOf("John");
console.log(index3)

// Both methods accept a second parameter as the starting position for the search:
let text4 = "Please locate where 'locate' occurs!";
let index4 = text4.indexOf("locate", 15);
console.log(index4)

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
let text5 = "Please locate where 'locate' occurs!";
let index5 = text5.lastIndexOf("locate", 15);
console.log(index5)

// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let text6 = "please locate where 'locate' occurs!";
let index6 = text6.search("locate");
console.log(index6)

// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

// Perform a search for "ain":
let text7 = "The rain in SPAIN stays mainly in the plain";
const myArr = text7.match("ain");
console.log(myArr.length + " " + myArr)

// Perform a search for "ain":
let text8 = "The rain in SPAIN stays mainly in the plain";
const myArr1 = text8.match(/ain/);
console.log(myArr1.length + " " + myArr1)

// Perform a global search for "ain":
let text9 = "The rain in SPAIN stays mainly in the plain";
const myArr2 = text9.match(/ain/g);
console.log(myArr2.length + " " + myArr2)

// Perform a global, case-insensitive search for "ain":
let text10 = "The rain in SPAIN stays mainly in the plain";
const myArr3 = text10.match(/ain/gi);
console.log(myArr3.length + " " + myArr3)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
JavaScript String matchAll()
The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
*/
// let word = "I love cats. Cats are very easy to love. Cats are very popular.";
// const iterator = word.matchAll("Cats");
// console.log(Array.from(iterator))

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
let word1 = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator1 = word1.matchAll(/Cats/g);
console.log(Array.from(iterator1))
