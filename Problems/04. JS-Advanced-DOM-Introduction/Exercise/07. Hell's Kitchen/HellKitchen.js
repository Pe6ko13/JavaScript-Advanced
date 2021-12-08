function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
  

   function onClick () {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const bestRest = document.querySelector('#bestRestaurant p');
      const workersPer = document.querySelector('#workers p');
      let restaurants = {};

      input.forEach(element => {
         const tokens = element.split(' - ');
         let restName = tokens[0];
         let workersArr = tokens[1].split(', ')
         let workers = [];

         for (let worker of workersArr) {
            let [workerName, workerSalary] = worker.split(' ')
            let salary = Number(workerSalary);
            workers.push({name: workerName, salary})
         }

         if (restaurants[restName]) {
            workers = workers.concat(restaurants[restName].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

         const bestSalary = workers[0].salary;
         const avgSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[restName] = {
            workers,
            avgSalary,
            bestSalary
         }

         let bestRestaurant = undefined;
         let besrtRestSalary = 0;

         for (const name in restaurants) {
            if (restaurants[name].avgSalary > besrtRestSalary) {
               bestRestaurant = {
                  name,
                  workers: restaurants[name].workers,
                  bestSalary: restaurants[name].bestSalary,
                  avgSalary: restaurants[name].avgSalary
               }
            }
            besrtRestSalary = restaurants[name].avgSalary
         }
         
         bestRest.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

         let workRes = [];

         bestRestaurant.workers.forEach((wor) => {
            workRes.push(`Name: ${wor.name} With Salary: ${wor.salary}`);
         })

         workersPer.innerHTML = workRes.join(' ');
         // workersPer.innerHTML = `Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`

      });
      
   }
}