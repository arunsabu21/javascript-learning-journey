/*
JavaScript Use Strict
The "use strict" Directive
The "use strict" directive was new in ECMAScript version 5.

It defines that JavaScript code should be executed in "strict mode".

It is not a statement. It is a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

Declaring Strict Mode
Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
*/

"use strict";
x = 3.14; // ReferenceError: x is not defined


// For a function only
function test() {
    "use strict";
    let x = 20;
}
