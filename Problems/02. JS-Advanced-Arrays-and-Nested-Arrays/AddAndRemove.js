function solve(input) {
    let num = 0;
    let newArr = [];
    for(let com of input) {
        num++;
        if (com == 'add'){
            newArr.push(num);
        } else {
            newArr.pop();
        }
    }
    if (newArr.length == 0) {
        console.log('Empty');
    } else {
    console.log(newArr.join('\n'));
    }
}

solve(['remove', 
'remove', 
'remove']
);