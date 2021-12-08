function solve(input) {
    let cat = {};

    for (let i of input) {
        let [town, product, price] = i.split(' | ');
        price = Number(price);
        

        if (!cat[product]) {
            cat[product] = {};
        }
        cat[product][town] = price;
    }
    
    for (let prod in cat) {
        const sortItems = Object.entries(cat[prod]).sort((a, b) => a[1] - b[1]);
        console.log(`${prod} -> ${sortItems[0][1]} (${sortItems[0][0]})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)