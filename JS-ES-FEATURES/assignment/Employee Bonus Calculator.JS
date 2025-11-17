const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
    let e = employees[i];
    let salaryNum = Number(e.salary);
    let yearsNum = Number(e.years);
    let bonusAmount;
    
    if (yearsNum > 3) {
        bonusAmount = salaryNum * 0.1;
    } else {
        bonusAmount = salaryNum * 0.05;
    }
    
    console.log("Name: " + e.name);
    console.log("Salary: Rs." + salaryNum);
    console.log("Experience: " + yearsNum + " years");
    console.log("Bonus: Rs." + bonusAmount);
    console.log("");
}