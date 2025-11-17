
"use strict";

const apiData = ["25", "true", "false", "NaN", "", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidData = [];

for (let i = 0; i < apiData.length; i++) {
    let n = Number(apiData[i]);
    let b = Boolean(apiData[i]);
    let s = String(apiData[i]);
    
    console.log("Value: " + apiData[i]);
    console.log("Number: " + n);
    console.log("Boolean: " + b);
    console.log("String: " + s);
    console.log("");
    
    if (!isNaN(n) && apiData[i] !== "" && apiData[i] !== null) {
        validNumbers.push(n);
    } else {
        invalidData.push(apiData[i]);
    }
}

console.log("Valid numeric data:");
console.log(validNumbers);
console.log("Invalid data:");
console.log(invalidData);
console.log("");