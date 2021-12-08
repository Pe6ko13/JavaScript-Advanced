function solve(input) {
    let table = [];

    const spl = input[0].split('|');
    let town = spl[1].trim();
    let lat = spl[2].trim();
    let long = spl[3].trim();

    for (let i = 1; i< input.length; i++) {
        const obj = {};
        let splitted = input[i].split('|');
        obj[town] = splitted[1].trim();
        obj[lat] = Number(Number(splitted[2].trim()).toFixed(2));
        obj[long] = Number(Number(splitted[3].trim()).toFixed(2));
        table.push(obj);
    }
    console.log(JSON.stringify(table));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)