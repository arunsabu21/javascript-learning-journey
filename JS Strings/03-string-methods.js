// JavaScript String Methods

// Basic String Methods
// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string

/*
String length
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

// JavaScript String Length
// The length property returns the length of a string:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

/*
Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

// The charAt() Method
var text1 = "HELLO WORLD";
let a = text1.charAt(0);
console.log(a);

/*
JavaScript String charCodeAt()
The charCodeAt() method returns the code of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).
*/

// The charCodeAt() Method
let text2 = "HELLO WORLD";
let b = text2.charCodeAt(0);
console.log(b);

// JavaScript codePointAt()
// Get code point value at the first position in a string:
let text3 = "HELLO WORLD";
let c = text3.codePointAt(0);
console.log(c);

// The at() Method
// The at() method returns an indexed element from a string:
const name = "JavaScript";
let letter = name.at(2);
console.log(letter);

// Bracket Notation
// The bracked notation [] returns an indexed element from a string:
const name1 = "W3Schools";
let letter1 = name1[2];
console.log(letter1);

// The at() method returns the character at a specified index (position) in a string.

// The at() method is supported in all modern browsers since March 2022:

// Property Access [ ]
// Property access on strings:
let text4 = "HELLO WORLD";
let result = text4[0];
console.log(result);

// JavaScript String concat()
// The concat() method joins two or more strings:
let text5 = "Hello";
let text6 = "World!";
let text7 = text5.concat(" ", text6);
console.log(text7);

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).
*/

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13);
console.log(part);

// Extract a part of a string from position 7:
let fruits2 = "Apple, Banana, Kiwi";
let part2 = fruits2.slice(7);
console.log(part2);

// Extract a part of string counting from the end:
let fruits3 = "Apple, Banana, Kiwi";
let part3 = fruits3.slice(-12);
console.log(part3);

// Extract a part of a string and return the extracted parts in a new string:
let fruits4 = "Apple, Banana, Kiwi";
let part4 = fruits4.slice(-12, -6);
console.log(part4);

/*
JavaScript String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().
*/

let str = "Apple, Banana, Kiwi";
let r = str.substring(7, 13);
console.log(r);

/*
JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

*/

// The substr() method extract a part of a string and returns the extracted parts in a new string:
let str1 = "Apple, Banana, Kiwi";
let x = str1.substr(7, 6);
console.log(x);

// If you omit the second parameter, substr() will slice out the rest of the string.
let str2 = "Apple, Banana, Kiwi";
let y = str2.substr(7);
console.log(y);

// If the first parameter is negative, the position counts from the end of the string.
let str3 = "Apple, Banana, Kiwi";
let x1 = str3.substr(-4);
console.log(x1);

/*
Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():
*/

// JavaScript String toUpperCase()
let text8 = "Hello World!";
let upperText = text8.toUpperCase();
console.log(upperText);

// JavaScript String toLowerCase()
let letters = "Hello World!";
let lowerCase = letters.toLowerCase();
console.log(lowerCase);

/*
JavaScript String isWellFormed()
The isWellFormed() method returns true if a string is well formed.

Otherwise it returns false.

A string is not well formed if it contains lone surrogates.
*/

let well = "Hello World!";
let results = well.isWellFormed();
console.log(results);

// isWellFormed() returns true if a string is well formed.
let check = "Hello world \uD800";
let result1 = check.isWellFormed();
console.log(result1);

/*
JavaScript String toWellFormed()
The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).
*/

let check1 = "Hello world \uD800";
let result2 = check1.toWellFormed();
console.log(result2);

/*
| Step             | Meaning                                               |
| ---------------- | ----------------------------------------------------- |
| `\uD800`         | half of a Unicode pair (invalid alone)                |
| `isWellFormed()` | checks if string is valid (would return `false` here) |
| `toWellFormed()` | replaces invalid part with `�`                        |
| Output           | `"Hello world �"`                                     |
*/

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:
let t1 = "     Hello World!     ";
let t2 = t1.trim();
console.log("Length t1 = " + t1.length + " " + "Length t2 = " + t2.length)


/*
JavaScript String trimStart()
ECMAScript 2019 added the String method trimStart() to JavaScript.

The trimStart() method works like trim(), but removes whitespace only from the start of a string.
*/
let s1 = "     Hello World!     ";
let s2 = s1.trimStart();
console.log("Length s1 = " + s1.length + " " + "Length s2 = " + s2.length)

/*
JavaScript String trimEnd()
ECMAScript 2019 added the string method trimEnd() to JavaScript.

The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
*/
let e1 = "     Hello World!     ";
let e2 = e1.trimEnd();
console.log("Length e1 = " + e1.length + " " + "Length e2 = " + e2.length)

/*
| Method        | Removes Spaces From | Keeps Spaces? |
| ------------- | ------------------- | ------------- |
| `trim()`      | Both start & end    | ❌             |
| `trimStart()` | Start only          | ✅ End         |
| `trimEnd()`   | End only            | ✅ Start       |
*/


/*
JavaScript String padStart()
The padStart() method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length.
*/

let p = "5";
let ps = p.padStart(4,"0");
console.log(ps)

// Pad a string with "x" until it reaches the length 4:
let p1 = "5";
let ps1 = p1.padStart(4,"x")
console.log(ps1)

/*
Note
The padStart() method is a string method.

To pad a number, convert the number to a string first.
*/
let numb = 5;
let n = numb.toString();
console.log((n.padStart(4,0)))

/*
JavaScript String padEnd()
The padEnd() method pads a string from the end.

It pads a string with another string (multiple times) until it reaches a given length.
*/
let pe = "5";
r1 = pe.padEnd(4,"0");
console.log(r1)

let pe1 = "5";
r2 = pe1.padEnd(4,"x");
console.log(r2)

/*
JavaScript String repeat()
The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

The repeat() method does not change the original string.
*/
let sample = "Hello World!";
let rep = sample.repeat(2)
console.log(rep)

/*
Replacing String Content
The replace() method replaces a specified value with another value in a string:
*/

let sample1 = "Please visit Microsoft";
let newText = sample1.replace("Microsoft", "W3 Schools");
console.log(newText)

// By default, the replace() method replaces only the first match:
let sample2 = "Please visit Microsoft and Microsoft";
let newT = sample2.replace("Microsoft", "W3 Schools");
console.log(newT)

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let sample3 = "Please visit Microsoft";
let newTe = sample3.replace("MICROSOFT", "W3 Schools");
console.log(newTe)

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let sample4 = "Please visit Microsoft";
let newTex = sample4.replace(/MICROSOFT/i, "W3 Schools")
console.log(newTex)

// To replace all matches, use a regular expression with a /g flag (global match):
let sample5 = "Please visit Microsoft and Microsoft";
let newtext = sample5.replace(/Microsoft/g, "W3 Schools");
console.log(newtext)

// JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():
let sen = "I love cats. Cats are very easy to love. Cats are very popular.";
sen = sen.replaceAll("Cats", "Dogs");
sen = sen.replaceAll("cats", "dogs");
console.log(sen)
