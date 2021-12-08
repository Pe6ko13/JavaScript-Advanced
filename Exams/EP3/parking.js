class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }

        let car = {carModel, carNumber, payed: false};
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;

    }

    removeCar(carNumber) {
        let curCar = this.vehicles.find(x => x.carNumber == carNumber);

        if(!curCar) {
            throw new Error(`The car, you're looking for, is not found.`);
        };

        if(curCar.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles = this.vehicles.filter(x => x.carNumber != curCar.carNumber);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let curCar = this.vehicles.find(x => x.carNumber == carNumber);

        if(!curCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        };

        if(curCar.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        };

        curCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;

    };

    getStatistics(carNumber) {
        if(!carNumber) {
            let result = [];
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length } empty spots left.`);
            this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(c => result.push(`${c.carModel} == ${c.carNumber} - ${c.payed ? 'Has payed' : 'Not payed'}`));
        
            return result.join('\n');
        }

        let curCar = this.vehicles.find(x => x.carNumber == carNumber);
        return `${curCar.carModel} == ${curCar.carNumber} - ${curCar.payed ? 'Has payed' : 'Not payed'}`;
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
