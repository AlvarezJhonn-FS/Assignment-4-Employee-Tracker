class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.annualSalary = 0;
    }
}

class PartTime extends Employee {
    constructor(name, age, payRate, hours) {
        super(name, age);
        this.payRate = payRate;
        this.hours = hours;
        this.employeeType = "Part-Time";
        this.calculatePay();
    }
    calculatePay() {
        this.annualSalary = this.payRate * this.hours * 52;
    }
}

class Manager extends Employee {
    constructor(name, age, payRate) {
        super(name, age);
        this.payRate = payRate;
        this.employeeType = "Manager";
        this.calculatePay();
    }
    calculatePay() {
        this.annualSalary = this.payRate * 40 * 52 - 1000;
    }
}
class Main{
    constructor() {
        this.employees = [
            new PartTime("Alice", 22, 15, 20),
            new Manager("Bob", 45, 30),
            new PartTime("Charlie", 28, 12, 25),
        ];
        this.menu();
    }

    addEmployee() {
        const input = prompt("Enter employee details (Name, Age, PayRate, Hours/Week): Separated by comas");
        const [name, age, payRate, hours] = input.split(",").map(item => item.trim());
        let employee;
        if (hours < 40) {
            employee = new PartTime(name, parseInt(age), parseFloat(payRate), parseFloat(hours));
        } else {
            employee = new Manager(name, parseInt(age), parseFloat(payRate));
        }
        this.employees.push(employee);
        this.displayEmployees();
    }

    removeEmployee() {
        const input = prompt("Enter employee number or name to remove:");
        this.employees = isNaN(input)
            ? this.employees.filter(emp => emp.name.toLowerCase() !== input.toLowerCase())
            : this.employees.filter((_, index) => index + 1 !== parseInt(input));
        this.displayEmployees();
    }

    editEmployee() {
        const id = parseInt(prompt("Enter employee number to edit:"));
        if (id > 0 && id <= this.employees.length) {
            const payRate = parseFloat(prompt("Enter new pay rate:"));
            this.employees[id - 1].payRate = payRate;
            this.employees[id - 1].calculatePay();
            this.displayEmployees();
        } else {
            console.log("Invalid employee number.");
        }
    }

    displayEmployees() {
        console.clear();
        console.log("Employee Tracker");
        console.log("ID\tName\tAge\tSalary\tHrs/Week\tPayRate\tType");
        this.employees.forEach((emp, index) => {
            console.log(
                `${index + 1}\t${emp.name}\t${emp.age}\t${emp.annualSalary}\t${emp.hours || 40}\t${emp.payRate}\t${emp.employeeType}`
            );
        });
    }

    menu() {
        while (true) {
            const menuText = "Menu:\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n5. Exit";
            const choice = parseInt(prompt(`${menuText}\n\nChoose an option:`));

            switch (choice) {
                case 1:
                    this.addEmployee();
                    break;
                case 2:
                    this.removeEmployee();
                    break;
                case 3:
                    this.editEmployee();
                    break;
                case 4:
                    this.displayEmployees();
                    break;
                case 5:
                    alert("Exiting...");
                    return;
                default:
                    alert("Invalid option. Try again.");
            }
        }
    }

}





(() => {
    new Main();
})();