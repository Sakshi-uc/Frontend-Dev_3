class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    const bonusAmount = (this.salary * percent) / 100;
    this.salary += bonusAmount;
    return this.salary;
  }
}

const emp1 = new Employee(101, "Raj Kumar", "Engineering", 50000);
const emp2 = new Employee(102, "Priya Singh", "Marketing", 45000);
const emp3 = new Employee(103, "Amit Patel", "Engineering", 55000);
const emp4 = new Employee(104, "Sneha Verma", "HR", 40000);
const emp5 = new Employee(105, "Vikram Mehta", "Sales", 48000);

const employees = [emp1, emp2, emp3, emp4, emp5];

console.log("=== Employee Details ===");
employees.forEach(emp => {
  console.log(`ID: ${emp.id}, Name: ${emp.name}, Department: ${emp.department}, Salary: ₹${emp.salary}`);
});

console.log("\n=== Annual Salary Calculation ===");
employees.forEach(emp => {
  console.log(`${emp.name} - Annual Salary: ₹${emp.getAnnualSalary()}`);
});

console.log("\n=== Applying 10% Bonus ===");
employees.forEach(emp => {
  const newSalary = emp.applyBonus(10);
  console.log(`${emp.name} - New Monthly Salary after 10% bonus: ₹${newSalary}`);
});

console.log("\n=== Total Annual Payout (using reduce) ===");
const totalPayout = employees.reduce((total, emp) => {
  return total + emp.getAnnualSalary();
}, 0);

console.log(`Total Company Annual Payout: ₹${totalPayout}`);