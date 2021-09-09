class Department {
    private depName: string;
    private employees: string[] = [];
    private static hello: string;

    constructor(n: string) {
        this.depName = n;
        Department.hello = "Hello";
    }

    // constructor(private depName: string) {

    // }

    describe(this: Department) {
        console.log('Department:'+ this.depName);
        console.log(Department.hello);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static sayHey() {
        console.log("Say Hi");
    }
}

const accounting = new Department('Accounting');
// accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[1] = 'Hey';
// console.log(accounting.employees[1]);

accounting.printEmployeeInformation();
Department.sayHey();
accounting.describe();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe};
// accountingCopy.describe();

// console.log(accounting);

