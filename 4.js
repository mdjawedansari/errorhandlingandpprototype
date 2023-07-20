// Employee Class Challenge

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
  
  const employee1 = new Employee("Akhtar", "student", 80000);
  
  // Expected Output
  console.log(employee1.getSalary()); 
  