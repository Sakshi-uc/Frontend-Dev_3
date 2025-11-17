const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

for (let i = 0; i < operations.length; i++) {
    try {
        let operation = operations[i];
        let answer;
        
        switch(operation) {
            case "add":
                answer = num1 + num2;
                console.log(num1 + " + " + num2 + " = " + answer);
                break;
            case "subtract":
                answer = num1 - num2;
                console.log(num1 + " - " + num2 + " = " + answer);
                break;
            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                answer = num1 / num2;
                console.log(num1 + " / " + num2 + " = " + answer);
                break;
            case "power":
                answer = Math.pow(num1, num2);
                console.log(num1 + " ^ " + num2 + " = " + answer);
                break;
            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot find root of negative number");
                }
                answer = Math.sqrt(num1);
                console.log("sqrt(" + num1 + ") = " + answer);
                break;
            default:
                throw new Error("InvalidOperationError");
        }
    } catch(error) {
        console.log("Error: " + error.message);
    }
}
console.log("");