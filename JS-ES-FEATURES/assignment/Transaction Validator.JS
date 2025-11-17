const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let invalid = [];
let valid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        let trans = transactions[i];
        
        if (trans === null) {
            console.log("Error at index " + i + ": null value found");
            invalid.push("null");
            continue;
        }
        
        if (!trans.amount || !trans.id) {
            console.log("Error at index " + i + ": missing properties");
            invalid.push("missing");
            continue;
        }
        
        if (trans.amount < 0) {
            console.log("Error at index " + i + ": amount is negative");
            invalid.push("negative");
            continue;
        }
        
        valid.push(trans);
    } catch(err) {
        console.log("Error processing transaction: " + err.message);
    }
}

console.log("");
console.log("Total valid: " + valid.length);
console.log("Total invalid: " + invalid.length);
console.log("");