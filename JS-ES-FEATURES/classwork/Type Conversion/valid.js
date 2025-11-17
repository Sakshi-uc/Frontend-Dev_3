console.log("\nparseFloat & Validation\n");

let str = "45.67";
let num = parseFloat(str);

console.log("Original string:", str);
console.log("After parseFloat():", num);
console.log("Type:", typeof num);
console.log("Is valid number? (using !isNaN):", !isNaN(num));

console.log("\nTesting with invalid value:");
let invalid = parseFloat("hello");
console.log("parseFloat('hello'):", invalid);
console.log("Is valid number?", !isNaN(invalid));