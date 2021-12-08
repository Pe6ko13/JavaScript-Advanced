function solve(input) {
    cat = {};

    input.forEach(element => {
        let [name, price] = element.split(' : ');
        price = Number(price);
        let letter = name[0];
        
        if (!cat[letter]) {
            cat[letter] = {};
        }
        cat[letter][name] = price;
    });

    let sortLetters = Object.keys(cat).sort((a, b) => a.localeCompare(b));
    for (let key of sortLetters) {
        let prod = Object.entries(cat[key]).sort((a, b) => a[0].localeCompare(b[0]));

        console.log(key);
        prod.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);

        })
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)


solve(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)