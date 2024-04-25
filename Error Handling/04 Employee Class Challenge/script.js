class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}


const employee = new Employee("John Doe", "Software Engineer", 80000);
console.log(`${employee.name}'s salary is $${employee.getSalary()}`);
