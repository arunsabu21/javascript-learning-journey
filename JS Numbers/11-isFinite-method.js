// The Number.isFinite() Method
// The Number.isFinite() method returns true if the argument is not Infinity, -iInfinity, nor Nan
console.log(Number.isFinite(123));
console.log(Number.isFinite(-99));
console.log(Number.isFinite(0));
console.log(Number.isFinite(12.5));

// Things that are NOT finite:
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite("123"));
console.log(Number.isFinite(undefined));