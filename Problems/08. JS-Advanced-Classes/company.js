class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({name, position, salary});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let currentBest= {
            name: '',
            salary: 0
        };
        
        for (let depKey in this.departments) {
            let avgSalary = 0;

            for (let emplKey in this.departments[depKey]) {
                avgSalary += this.departments[depKey][emplKey].salary;
            }

            avgSalary = avgSalary / this.departments[depKey].length;
            if (currentBest.salary < avgSalary) {
                currentBest.name = depKey;
                currentBest.salary = avgSalary;
            }
        };

        this.departments[currentBest.name].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
            // if (a.salary - b.salary < 0) {
            //     return b;
            // } else if (a.salary - b.salary > 0) {
            //     return a;
            // } else {
            //     return a.name.localeCompare(b.name);
            // }
        });

        let bestDepString = [];
        bestDepString.push(`Best Department is: ${currentBest.name}`);
        bestDepString.push(`Average salary: ${currentBest.salary.toFixed(2)}`);
        this.departments[currentBest.name].forEach(el => {
            bestDepString.push(`${el.name} ${el.salary} ${el.position}`);
        });

        return bestDepString.join('\n');
    }
};


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
