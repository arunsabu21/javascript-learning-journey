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

