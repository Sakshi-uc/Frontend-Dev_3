const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanArray = [];
let errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let parsed = JSON.parse(rawData[i]);
        
        if (!parsed.user || !parsed.age) {
            console.log("Entry " + (i+1) + ": missing user or age field");
            errors.push(i+1);
        } else {
            let ageValue = Number(parsed.age);
            if (ageValue < 18) {
                console.log("Entry " + (i+1) + ": age below 18, skipped");
            } else {
                cleanArray.push({
                    user: parsed.user,
                    age: ageValue
                });
                console.log("Entry " + (i+1) + ": added successfully");
            }
        }
    } catch(e) {
        console.log("Entry " + (i+1) + ": invalid JSON format");
        errors.push(i+1);
    }
}

console.log("");
console.log("Clean records:");
console.log(cleanArray);
console.log("Error lines: " + errors);
console.log("");