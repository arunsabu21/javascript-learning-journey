// JavaScript URI Errors
// (Uniform Resource Identifier Errors)
// An URIError occurs if you use illegal characters in a URI function:

try {
    decodeURL("%%%");
} catch(err) {
    let text = err.name + " " + err.message;
    console.log(text); // Output: ReferenceError decodeURL is not defined
}