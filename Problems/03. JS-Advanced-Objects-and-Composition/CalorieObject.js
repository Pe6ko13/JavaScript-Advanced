function solve(arr) {
    let name = '';
    let value = 0;
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            name = arr[i];
            
        } else {
            value = Number(arr[i])      
        }
        obj[name] = value;
    }  
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])