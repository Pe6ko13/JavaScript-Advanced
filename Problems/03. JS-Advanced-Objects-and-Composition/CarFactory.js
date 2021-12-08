function solve(car) {
    let smallEngine = {power: 90, volume: 1800};
    let normalEngine = {power: 120, volume: 2400};
    let monsterEngine = {power: 200, volume: 3500};

    const newCar = {model: car.model};

    if (car.power <= 90) {
        newCar['engine'] = smallEngine;
    } else if (car.power <= 120){
        newCar['engine'] = normalEngine;
    } else if (car.power <= 200) {
        newCar['engine'] = monsterEngine;
    }

    newCar['carriage'] = {type: car.carriage, color: car.color}

    if (car.wheelsize % 2 === 0) {
        newCar['wheels'] = whel(car.wheelsize - 1)
    } else {
        newCar['wheels'] = whel(car.wheelsize)
    }

    function whel(num) {
        let wheel = [];
        for (let i =0; i < 4; i++) {
            wheel.push(num)
        }
        return wheel
    }

    return newCar;
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)
