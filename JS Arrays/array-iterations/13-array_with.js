// JavaScript Array with() Method
// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.
const months = ["January", "February", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths); // Output: [ 'January', 'February', 'March', 'April' ]
