function solve(input) {
    const obj = {};

    const car = {
        create: (name, parentName, value) => 
            (obj[name] = parentName ? Object.create(obj[value]) : {}),
        set: (name, key, val) => (obj[name][key] = val),
        print: name => {
            let entry = [];
            for (let k in obj[name]) {
                entry.push(`${k}:${obj[name][k]}`)
            }
            console.log(entry.join(','));
        },
    }

    for(let i of input) {
        let [c, n, k, v] = i.split(' ')
        car[c](n, k, v)
    }
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']

)