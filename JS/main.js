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

}





(() => {
    new Main();
})();