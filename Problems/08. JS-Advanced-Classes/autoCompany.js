function solve(input) {
    let carBrand = new Map();

    input.forEach(element => {
        let [brand, model, count] = element.split(' | ');
        count = Number(count);

        if (carBrand.has(brand)) {
            let carBr = carBrand.get(brand);
            if (carBr.has(model)) {
                let carMod = carBr.get(model);
                carMod += count;
                carBr.set(model, carMod);
            } else {
                carBr.set(model, count);
            }
        } else {
            let modelMap = new Map();
            modelMap.set(model, count);
            carBrand.set(brand, modelMap);
        }
    });

    for (const key of carBrand.keys()) {
        console.log(key);
        const brand = carBrand.get(key);
        for (const [model, count] of brand) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);