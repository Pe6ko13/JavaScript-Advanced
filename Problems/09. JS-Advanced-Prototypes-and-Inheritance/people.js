function solution() {

    const juniorTasks = [
        ' is working on a simple task.'
    ];
    const seniorTasks = [
        ' is working on a complicated task.',
        ' is taking time off work.',
        ' is supervising junior workers.'
    ];
    const managerTasks = [
        ' scheduled a meeting.',
        ' is preparing a quarterly report.'
    ];

    class Employee {
        constructor(name, age) {
            if (new.target == Employee) {
                throw new Error('Cannot be initialize. Abstract class!');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currTask = this.tasks.shift();
            console.log(this.name + currTask);
            this.tasks.push(currTask);

        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary (){
            return this.salary;
        }
    }

    class Junior extends Employee{
        constructor(name, age) {
            super(name, age);
            this.tasks = juniorTasks;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = seniorTasks;
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age,);
            this.tasks = managerTasks;
            this.dividend = 0;
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}


const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  
